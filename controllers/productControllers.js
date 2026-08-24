const Product=require("../models/productModel");

const getProduct=async(req,res) => {
    try{
        const product=await Product.find();
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const createProduct=async(req,res) => {
    try {
    const {name, price, category, stock, description}=req.body;
    const newProduct=new Product({name, price, category, stock, description});
    await newProduct.save();
    res.status(201).json(newProduct);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

const getProductById=async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({message: "Not Found"});
        }
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const updateProduct=async(req,res) => {
    try{
    const updateProduct=await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updateProduct) {
        res.status(404).json({message: "Not Found"});
    }
    res.status(200).json(updateProduct);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
const deleteProduct=async(req,res) => {
    try{
        const deleteProduct=await Product.findByIdAndDelete(req.params.id);
        if (!deleteProduct) {
            res.status(404).json({message: "Not Found"});
        }
        res.status(200).json(deleteProduct);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {getProduct,createProduct,updateProduct,deleteProduct, getProductById};
