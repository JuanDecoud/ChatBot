import Router from 'express';
import ProductController from '../controllers/product.controller.js';

const productRouter = Router();
const productController = new ProductController()

productRouter.post("/addProduct" , productController.addProduct)
productRouter.get("/getProducts" , productController.getProducts)

export default productRouter