const categories = require("../models/Categories.js");
const Category = require("../models/Categories.js");

const index = async (req, res) => {
  try {
    const categories = await Product.findAll();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
};

const show = async (req, res) => {
  try {
    const category = await Product.findByPk(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Error fetching category" });
  }
};

const store = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Error creating category" });
  }
};

const update = async (req, res) => {
  try {
    const category = await Product.findByPk(req.params.id);
    if (category) {
      await category.update(req.body);
      res.json(category);
    } else {
      res.status(404).json({ error: "category not found" });
    }
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Error updating category" });
  }
};

const destroy = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      await category.destroy();
      res.json({ message: "category successfully deleted" });
    } else {
      res.status(404).json({ error: "category not found" });
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Error deleting category" });
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
