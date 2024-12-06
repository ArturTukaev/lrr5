import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

export const addCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Укажите название категории!" });
    }

    try {
        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: "Ошибка при добавлении категории", error });
    }
};