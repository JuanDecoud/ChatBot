import services from '../services/services.js'

export default class ProductController{
    addProduct = async(req,res)=>{
        try {
            const product = req.body 
            const newProduct = await services.productServices.addProduct(product)
            res.status(200).json({status:"Exito" , message: newProduct})
            
        } catch (error) {
            console.log("Ocurrio Un ERROR" ,error)
            res.status(403).json({status:"error" , error:error })
        }
    }

    getProducts = async (req,res)=>{
        try {
            const products = await services.productServices.getProducts()
            res.status(200).json(products)
            
        } catch (error) {
            console.log("Ocurrio Un ERROR" ,error)
            res.status(403).json({status:"error" , error:error })
        }
    }
}