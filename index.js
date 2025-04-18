import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from 'path'
import categoryRoutes from "./routes/categoryRoutes.js";
import subcategoryRoutes from "./routes/subcategoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import OrderRoute from "./routes/OrderRoute.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ Serve Static Uploads Folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


app.use(cors({
  origin: 'https://akhil-graphic-second-page-frontend.vercel.app',
  credentials: true
}));
// ✅ Connect to DB
connectDB();

// ✅ Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/order", OrderRoute);

// ✅ Start Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
