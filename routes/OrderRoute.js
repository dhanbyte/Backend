import express from "express";
import Order from "../module/OrderSchema.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// ✅ Ensure "uploads" folder exists
const uploadsPath = path.join(process.cwd(), "uploads"); // Safer than __dirname
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
  console.log("📁 Created uploads folder at:", uploadsPath);
}

// ✅ Setup Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ✅ POST: Save order
router.post("/orderInput", upload.single("file"), async (req, res) => {
  try {
    console.log("🛠️ Received body:", req.body);
    console.log("📁 Received file:", req.file);

    const {
      customerName,
      paperType,
      flapOpening,
      windowCutting,
      quantity,
      specialRemark,
      userId,
      totalWithGst,
      productName,
    } = req.body;

    const order = new Order({
      customerName,
      paperType,
      flapOpening,
      windowCutting,
      quantity,
      specialRemark,
      userId,
      totalWithGst,
      productName,
      file: req.file?.filename || "", // ✅ Safe handling
    });

    const savedOrder = await order.save();
    console.log("✅ Order saved:", savedOrder._id);
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("❌ Order Save Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ GET: Get all orders
router.get("/orderOutput", async (req, res) => {
 
  try {
    const data = await Order.find();
    res.json(data);
    console.log("📦 Fetched Orders:", data.length);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch data" });
  }
});

export default router;
