export default class OrderRepository {
    constructor(dao){
        this.dao=dao
    }
    getOrderByUserId = async (userId)=> await this.dao.getOrderByUserId(userId);
    addOrder = async (order)=> await this.dao.addOrder(order);
    
}