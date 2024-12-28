import mongoose from 'mongoose';

const collectionName = "user";

const userSchema = new mongoose.Schema({
    name:String,
    lastName:String,
    dni:String,
    email:String,
    password:String,
    phone:String
});

const userModel = mongoose.model(collectionName,userSchema);

export default userModel