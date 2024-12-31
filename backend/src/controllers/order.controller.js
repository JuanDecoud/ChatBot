import services from '../services/services.js'

export default class OrderController{
    addOrder = async(req,res)=>{
        try {
           
            console.log(req.body)
           
                const orderDetail = req.body 
                

           
            res.status(200).json({status:"Exito" , message: "hola"})
            
        } catch (error) {
            console.log("Ocurrio Un ERROR" ,error)
            res.status(403).json({status:"error" , error:error })
        }
    }

    getOrders = async (req,res)=>{
        try {
            const products = await services.productServices.getProducts()
            res.status(200).json(products)
            
        } catch (error) {
            console.log("Ocurrio Un ERROR" ,error)
            res.status(403).json({status:"error" , error:error })
        }
    }
}