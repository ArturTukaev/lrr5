import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getProducts = async (req, res) => {
    const products = await Product.findAll({ include: Category });
    res.json(products);
};

export const addProduct = async (req, res) => {
    const { name, size, price, categoryId } = req.body;

    if (!name || !size || !price || !categoryId) {
        return res.status(400).json({ message: "Укажите название, размер, цену и категорию!" });
    }

    try {
        const newProduct = await Product.create({ name, size, price, categoryId });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Ошибка при добавлении продукта", error });
    }
};
