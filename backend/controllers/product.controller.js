import Product from "../models/product.model.js";
import mongoose from "mongoose";

const getAllProducts =  async (req, res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, message: products});
        console.log("Product list sent")
    }catch(error){
        console.log("Error fetching products from DB : ", error.message);
        res.status(500).json({success:false, message:"Server error"});
    }
}

const getProductById = async (req, res) =>{
    const {id} = req.params;
    console.log("Fetching product with id:", id);
    try{
        const products = await Product.find({_id:id});
        res.status(200).json({success: true, message: products});
        console.log("Product list sent")
    }catch(error){
        console.log("Error fetching products from DB : ", error.message);
        res.status(500).json({success:false, message:"Server error"});
    }
}

const addProduct = async (req,res) =>{
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.errored(400).json({success:false,message:"Please provide all required fields"});
    } 
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
        console.log("Product added to DB");
    }catch(error){
        console.error("Error in create product: ", error.message);
        res.status(500).json({status: false, message: "Server Error"})
    }
}

// put used here when updating the whole product
// patch can be instead if updating only part of the product info
const updateProduct =  async (req,res) =>{
    const {id} = req.params;
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.errored(400).json({success:false,message:"Please provide all required fields"});
    } 
    try{
        const updated = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(201).json({success: true, data: updated});
        console.log("Product update in DB");
    }catch(error){
        console.error("Error in updating product: ", error.message);
        res.status(500).json({status: false, message: "Server Error"})
    }
}

const deleteProduct = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))    
        // this only seems to check if ID is in correct format
        // doesn't seem to work if ID is not actually found in the DB
        return res.status(404).json({success:false,message:"Invalid product ID"})
    console.log("Deleting id:", id);
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted"});
    }catch(error){
        res.status(404).json({success:false, message:"Product not found"});
    }
}

export {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}