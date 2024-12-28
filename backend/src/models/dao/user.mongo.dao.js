
import userModel from "../user.mongo.model.js"
export default class UserDao {


    addUser = async (user)=>{
        try {
            const newUser = await userModel.create(user) 
            if(newUser)return newUser
            else return null
        } catch (error) {
            console.log("ocurrio un error: ", error)
            return null
        }
    }

    getUser = async (user) => {
        try {
            let userFind = await  userModel.findOne({ email: user.email })
            if (userFind) {
                return userFind
            }
            return null; // Retorna explícitamente `null` si no encuentra al usuario
        } catch (error) {
            console.log("Error al buscar usuario:", error);
            return null;
        }
    };
}