import express from "express";
import { getProducts, addProduct } from "./controllers/productController.js";
import { getCategories, addCategory } from "./controllers/categoryController.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProduct);

router.get("/categories", getCategories);
router.post("/categories", addCategory);

export default router;

import upload from "./middleware/upload.js";

router.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Файл не был загружен!" });
    }

    res.status(201).json({
        message: "Файл успешно загружен!",
        file: req.file.filename,
    });
});
