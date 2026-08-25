const Product = require("../models/productModel");

function errorHandler(error, req, res, next) {

    if (error.name === "CastError") {
        return res.status(400).json({ message: `${error.message}, NOT VALID ID` });
    }

    if (error.name === "ValidationError") {
        const objectError = {};
        for (let er in error.errors) {
            objectError[er] = error.errors[er].message;
        }
        return res.status(400).json(objectError);
    }

    res.status(500).json({ message: error.message });
}

const getProduct = async (req, res, next) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

const createProduct = async (req, res, next) => {
    try {
        const { name, price, category, stock, description } = req.body;
        const newProduct = new Product({ name, price, category, stock, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
}

const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Not Found" });
        }
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateProduct) {
            return res.status(404).json({ message: "Not Found" });
        }
        res.status(200).json(updateProduct);
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deleteProduct) {
            return res.status(404).json({ message: "Not Found" });
        }
        res.status(200).json(deleteProduct);
    } catch (error) {
        next(error);
    }
}

module.exports = { getProduct, createProduct, updateProduct, deleteProduct, getProductById, errorHandler };