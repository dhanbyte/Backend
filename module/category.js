import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
  link: String,
  slug: String,
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
