import express from "express";
import { createProduct, updateProduct, deleteProduct, getProducts} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts ); // Fetch all products from the database
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;