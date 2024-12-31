export default class UserDTO {
    constructor (user){
        if(user){
            this.id = user._id.toString()
            this.userMail = user.email
            this.name = user.name + user.lastname
            this.phone = user.phone
            this.addres = user.address
        }
       
    }
}