import orderModel from '../orders.mongo.model.js'

export default class ProductDao {

    addOrder = async (order)=>{
        try {
            const newOrder = orderModel.create(order) 
            if(newOrder)return newOrder
            else return null
        } catch (error) {
            console.log("ocurrio un error: ", error)
            return null
        }
    }

    getOrderByUserId = async (userId)=>{
        try {
            const newOrders = await orderModel.find({client:userId}).populate("products.product.productId")
            if(newOrders)return newOrders
            else return null
            
        } catch (error) {
            console.log("ocurrio un error: ", error)
            return null
        }
    }
}