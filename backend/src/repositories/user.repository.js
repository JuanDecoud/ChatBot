export default class UserRepository {
    constructor(dao){
        this.dao=dao
    }

    addUser = async (user)=>await  this.dao.addUser(user)
    getUser = async(user)=>await this.dao.getUser(user)
    
}