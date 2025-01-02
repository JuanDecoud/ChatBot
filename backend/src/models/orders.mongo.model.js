import mongoose from 'mongoose';

const collectionName = "order";

const orderSchema = new mongoose.Schema({
    client: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    products : {
        type : 
        [
            {
                product:
                {
                    productId:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"product"
                    },
                    price: Number,
                    quantity:Number
                }
            }

        ]
    },
    status:{
        type:String,
        default:"En curso"
    },
    date:String
});


const productModel = mongoose.model(collectionName,orderSchema);

export default productModel