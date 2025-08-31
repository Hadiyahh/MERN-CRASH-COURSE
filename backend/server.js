import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 5000

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/products", productRoutes); // Use product routes

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});