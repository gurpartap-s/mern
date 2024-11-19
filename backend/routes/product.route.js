import express from "express";
import {addProduct, deleteProduct, getAllProducts, getProductById, updateProduct} from "../controllers/product.controller.js"

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
// put used here when updating the whole product
// patch can be instead if updating only part of the product info
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;