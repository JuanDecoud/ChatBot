export default class UserDTO {
    constructor (user){
        
        if(user){
            this.id = user._id
            this.userMail = user.email
            this.name = user.name 
            this.phone = user.phone
            this.addres = user.address
        }
       
    }
}