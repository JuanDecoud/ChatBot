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

    getOrdersByid = async (userId)=>{
        try {
            const newOrders = await orderModel.find({client:userId})
            if(newOrders)return newOrders
            else return null
            
        } catch (error) {
            console.log("ocurrio un error: ", error)
            return null
        }
    }
}