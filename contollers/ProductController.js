const mongoose = require("mongoose");
const ProductModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const Products = await ProductModel.find();

    res.status(200).json(Products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const Product = await ProductModel.findById(req.params.id);
    res.status(200).json(Product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, price, weight, file } = req.body;

  const newProduct = new ProductModel({ name, price, weight, file });

  try {
    await newProduct.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, weight, file } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedProduct = { name, price, weight, file, _id: id };

  await ProductModel.findByIdAndUpdate(id, updatedProduct, { new: true });

  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await ProductModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
module.exports = {
  deleteProduct,
  updateProduct,
  getProducts,
  getProduct,
  createProduct,
};
