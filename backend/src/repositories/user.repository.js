export default class UserRepository {
    constructor(dao){this.dao=dao;};
    addUser = async (user)=>await  this.dao.addUser(user);
    getUser = async(user)=>await this.dao.getUser(user);
    findbyuserName = async (vemail) =>await this.dao.findbyuserName(vemail);
    getById = async (userId) =>await this.dao.getById(userId);
    
}