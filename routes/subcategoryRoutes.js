import express from "express";
import Subcategory from "../module/Subcategory.js";

const router = express.Router();

// ✅ GET all subcategories
router.get("/", async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.json(subcategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ GET subcategories by category slug
router.get("/:category_slug", async (req, res) => {
  try {
    const { category_slug } = req.params;
    const subcategories = await Subcategory.find({ category_slug });
    res.json(subcategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
