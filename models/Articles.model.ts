import { Schema, model, models } from "mongoose";

//TYPE DECLARATION FOR FIELDS
interface Properties {
  type: string;
  unique?: boolean;
  required?: boolean;
  default?: any;
  caseSensitive?: boolean;
}

//TYPE DECLARATION FOR THE SCHEMA
interface ArticlesInterface {
  title: Properties;
  content: Properties;
  slug: Properties;
  description: Properties;
}

const ArticlesSchema: Schema<ArticlesInterface> = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      caseSensitive: false,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Articles: any = models.Articles || model("Articles", ArticlesSchema);

export default Articles;
