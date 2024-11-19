import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        erquired: true
    },
},{
    timestamps: true    //each product entry would have createdAt and updatedAt
});

const Product = mongoose.model('Product', productSchema); // does this work with a different name ? or is Product mapped to products

export default Product;