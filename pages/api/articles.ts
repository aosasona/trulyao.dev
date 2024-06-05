import { NextApiRequest, NextApiResponse } from "next";
import connect from "config/db";
const underscore = require("underscore.string");
import Articles from "models/Articles.model";
import mongoose from "mongoose";

//Articles Interface
interface ArticlesInterface {
  title: string;
  slug?: string;
  content: string;
  description: string;
  password?: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connect();

  /**
   * @method POST
   * @description Handle POSTS Request
   */
  if (req.method === "POST") {
    try {
      const { title, content, description, password }: ArticlesInterface =
        req.body;
      if (!(title && content && description)) {
        throw { statusCode: 400, message: "All fields are required" };
      }

      //IF NO PASSWORD IS PROVIDED
      if (password !== process.env.NEXT_PUBLIC_PASSWORD) {
        throw { statusCode: 400, message: "Password is incorrect" };
      }

      //DATA
      const Title: string = underscore(title).trim().capitalize().value();
      const Slug: string = underscore.slugify(title.trim().toLowerCase());

      //CHECK IF THE SLUG EXISTS
      const findSlug = await Articles.findOne({ slug: Slug });

      if (findSlug) {
        throw { statusCode: 400, message: "Title already exists!" };
      }

      //CREATE NEW ARTICLE
      const createArticle = await Articles.create({
        title: Title,
        slug: Slug,
        content: content.trim(),
        description: description.trim(),
      });

      if (createArticle) {
        return res.status(201).json({ status: "success", data: createArticle });
      }
    } catch (err: any) {
      console.log(err);
      return res.status(err?.statusCode || 500).json({
        status: "error",
        message: err?.message || "Something went wrong",
      });
    }
  } else {
    try {
      const rawArticles: any = await Articles.find()
        .sort({ createdAt: "desc" })
        .lean();

      return res.status(200).json({ status: "success", articles: rawArticles });
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({
        status: "error",
        message: err?.message || "Something went wrong",
      });
    }
  }
}
