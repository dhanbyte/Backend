import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  products: [String],
  paperTypes: [String],
  windowCuttingOptions: [String],
  flapOpeningOptions: [String],
  defaultQty: Number,
  cost: Number,
  image: String,
  description: String,
  subcategory_slug: String,
  
});

export default mongoose.model("Product", ProductSchema);
