import express from "express";
import Product from "../module/Products.js"

const router = express.Router();

// ✅ Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Get products by subcategory slug
router.get("/:subcategory_slug", async (req, res) => {
  try {
    const { subcategory_slug } = req.params;
    const products = await Product.find({ subcategory_slug });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
