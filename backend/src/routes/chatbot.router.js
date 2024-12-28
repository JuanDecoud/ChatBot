import { Router } from "express";
import ChatBotService from "../services/chatbot/chatbot.services.js";
import axios from "axios"
import EnvValues from "../config/env/env.variables.js";

const chatRouter = Router()


chatRouter.post ("/botReponse",async (req,res)=>{
    try {
        const question = req.body;
        console.log(question);
        const instructions = `
        Eres un chatbot para un restaurante. Responde de manera breve y específica según la intención del usuario. Usa las siguientes reglas:
        1. Si el mensaje menciona la palabra 'menú' o 'carta', responde con la palabra 'menu' y nada más.
        2. Si el mensaje menciona algo relacionado con pedidos, responde solo con 'pedido'.
        3. Si el mensaje menciona 'horarios', responde solo con 'horario'.
        4. Si no entiendes la pregunta, responde: 'No estoy seguro de cómo ayudarte con eso.'
        `;

        const response = await axios.post(
          'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B',
          {
            inputs: `${instructions}\nUsuario: ${question.message}\nRespuesta:`, // Concatenamos las instrucciones con el mensaje del usuario
          },
          {
            headers: {
              Authorization: `Bearer ${EnvValues.chatKey}`,
            },
          }
        );
    
        console.log(response.data[0].generated_text)
        res.status(200).json({
          response: response.data, // Devuelves la respuesta del modelo a quien haga la solicitud
        });
        
    } catch (error) {
        console.log("Ocurrio Un ERROR" ,error)
        res.status(500).json({status:"error" , error:error })
    }
})

export default chatRouter