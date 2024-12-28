import productModel from '../product.mongo.model.js'

export default class ProductDao {

    addProduct = async (product)=>{
        try {
            const newProduct = productModel.create(product) 
            if(newProduct)return newProduct
            else return null
        } catch (error) {
            console.log("ocurrio un error: ", error)
            return null
        }
    }

    getProducts = async ()=>{
        try {
            const products = await productModel.find()
            return products
            
        } catch (error) {
            console.log("ocurrio un error: ", error)
            return null
        }
    }
}