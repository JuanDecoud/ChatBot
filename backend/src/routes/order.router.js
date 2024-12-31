import Router from 'express'
import OrderController from '../controllers/order.controller.js'

const orderController = new OrderController()

const orderRouter = Router()

orderRouter.post ("/addOrder" , orderController.addOrder )


export default orderRouter