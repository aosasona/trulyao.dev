import Articles from "models/Articles.model";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { slug } = req.query;
      const findArticle = await Articles.findOne({ slug: slug });

      if (!findArticle) {
        throw { statusCode: 404, message: "Not Found!" };
      }

      return res.status(200).json({ status: "success", data: findArticle });
    } catch (err: any) {
      console.log(err);
      return res.status(err?.statusCode || 500).json({
        status: "error",
        message: err?.message || "Something went wrong",
      });
    }
  }
}
