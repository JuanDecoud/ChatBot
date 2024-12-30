import { Router } from "express";
import ChatBotService from "../services/chatbot/chatbot.services.js";
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

        console.log(response.data[0].text)

        if(response){
          
          switch (response.data[0].text) {

            case "menu":
              let menu = await services.productServices.getProducts()
              let menuString =""
              menu.forEach(element => {menuString+=`Plato: ${element.name} Precio:$ ${element.price}\n`}); 

              res.status(200).json({sender:"Bot", message:`El menu que ofrecemos es el siguiente: \n${menuString}}`})
            break;

            case "horario":
              console.log(1)
              res.status(200).json(`El horario que realizamos es de 8 am a 00 pm hs`)
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