import UserRepository from "../repositories/user.repository.js";
import UserDao from "../models/dao/user.mongo.dao.js" 
import ProductRepository from '../repositories/product.repository.js'
import ProductDao from '../models/dao/product.mongo.dao.js'
import OrderRepository from '../repositories/order.repository.js'
import OrderDao from '../models/dao/orders.mongo.dao.js'

//// Servicios ------
const userServices = new UserRepository (new UserDao());
const productServices = new ProductRepository (new ProductDao());
const orderService = new OrderRepository(new OrderDao());
///------------------------------------

export default {userServices,productServices, orderService}