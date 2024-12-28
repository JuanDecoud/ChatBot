import services from '../services/services.js'

export default class UserController{
    addUser = async(req,res)=>{
        try {
            const user = req.body 
            const newUser = await services.userServices.addUser(user)
            res.status(200).json({status:"Exito" , message:newUser})
            
        } catch (error) {
            console.log("Ocurrio Un ERROR")
            res.status(403).json({status:"error" , error:error })
        }
    }

    login = async (req, res) => {
        try {
         
            const user = req.body;
            let newUser = await services.userServices.getUser(user)
            if (newUser) {
                return res.status(200).json({ success: true, user: newUser });
            } else {
                return res.status(404).json({ success: false, message: "Usuario no encontrado" });
            }
        } catch (error) {
            console.error("Ocurrió un ERROR:", error);
            return res.status(500).json({ success: false, message: "Error interno del servidor", error });
        }
    };
}