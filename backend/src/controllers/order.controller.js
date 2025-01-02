import services from '../services/services.js'
import { DateTime } from 'luxon'

export default class OrderController{
    addOrder = async(req,res)=>{
        try {
            const {producto,cantidad,user} = req.body 
            const today = DateTime.now().toLocaleString(DateTime.DATE_SHORT);
            const finalProduct = await services.productServices.getProductByName(producto)
            if(finalProduct){
                const order = {
                    client: user,
                    date:today,
                    products: [
                        {
                            product:{
                                productId:finalProduct._id,
                                quantity: parseFloat(cantidad),
                                price:finalProduct.price,
                            }
                        }
                    ]
                };
                
                let newOrder = await services.orderService.addOrder(order);
                res.status(200).json({status:"Exito" , message: newOrder});

            }
            else  return res.status(404).json({ message: "Producto no encontrado" });
            
        } catch (error) {
            console.log("Ocurrio Un ERROR" ,error)
            res.status(403).json({status:"error" , error:error })
        }
    }

    getOrders = async (req,res)=>{
        try {
            let user = req.params.id
            console.log(user)
            const orders = await services.orderService.getOrderByUserId(user)
            res.status(200).json(orders)
            
        } catch (error) {
            console.log("Ocurrio Un ERROR" ,error)
            res.status(403).json({status:"error" , error:error })
        }
    }
}