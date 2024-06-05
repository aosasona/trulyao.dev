import mongoose from "mongoose";
const MONGO_URI: string =
  process.env.NEXT_PUBLIC_MONGO_URL || "mongodb://localhost:27017";

export default async function connect() {
  mongoose
    .connect(MONGO_URI)
    .then((res) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}
