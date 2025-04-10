import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
  link: String,
  dec: String,
  dec: String,
  slug: String,
  category_slug: String,
  defaultQty:Number,
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

export default Subcategory;
