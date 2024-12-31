import { Router } from "express";
import axios from "axios"
import EnvValues from "../config/env/env.variables.js";

const chatRouter = Router()
import services from '../services/services.js'

chatRouter.post ("/botReponse",async (req,res)=>{
    try {
        const question = req.body;
  
        const response = await axios.post(
          'http://localhost:5005/webhooks/rest/webhook',
          {
            sender:"user1",
            message:question.message
          },
  
        );

        if(response){

          let value =response.data[0].text
          let menu = ""
          let menuString=""
          if (value === "menu"  || value ==="saludo-menu"){
            menu = await services.productServices.getProducts()
            menu.forEach(element => {menuString+=`Plato: ${element.name} Precio:$ ${element.price}\n`}); 
          }

          switch (value) {
            case "menu":
              res.status(200).json({sender:"Bot", message:`El menu que ofrecemos es el siguiente: \n${menuString}}`})
            break;

            case "horario":
              res.status(200).json({sender:"Bot", message:`El horario que realizamos es de 8:00 am a 0:00 am hs`})
            break;

            case "saludo-menu":
              res.status(200).json({sender:"Bot", message:`Buenas, ¿cómo estás?. ${menuString}`})
            break;

            default:
              res.status(200).json({sender:"Bot" ,message:response.data[0].text})
            break;
          }

        }
       
    } catch (error) {
        console.log("Ocurrio Un ERROR" ,error)
        res.status(500).json({status:"error" , error:error })
    }
})

export default chatRouter