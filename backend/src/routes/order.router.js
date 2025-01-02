import Router from 'express'
import OrderController from '../controllers/order.controller.js'

const orderController = new OrderController()

const orderRouter = Router()

orderRouter.post ("/addOrder" , orderController.addOrder )
orderRouter.get('/getOrders/:id', orderController.getOrders);

export default orderRouter