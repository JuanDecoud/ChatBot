import mongoose from 'mongoose';

const collectionName = "product";

const productSchema = new mongoose.Schema({
    code:String,
    name:String,
    price:Number,
    description:String,
});


const productModel = mongoose.model(collectionName,productSchema);

export default productModel