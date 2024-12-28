import UserRepository from "../repositories/user.repository.js";
import UserDao from "../models/dao/user.mongo.dao.js" 
import ProductRepository from '../repositories/product.repository.js'
import ProductDao from '../models/dao/product.mongo.dao.js'


//// Servicios ------
const userServices = new UserRepository (new UserDao());
const productServices = new ProductRepository (new ProductDao());
///------------------------------------



export default {userServices,productServices}