import { Router } from "express";
import ChatBotService from "../services/chatbot/chatbot.services.js";

const chatRouter = Router()


chatRouter.post ("/botReponse",async (req,res)=>{
    try {
        const question = req.body
        console.log(question)
        const iaService = new ChatBotService()
        const apibot = iaService.createopenApi()
        const response = await apibot.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Eres un chatbot para un restaurante. Responde de manera breve y específica según la intención del usuario. Usa las siguientes reglas: \
                    1. Si el mensaje menciona el 'menú' o 'carta' , responde solo con la palabra 'menu'. \
                    2. Si menciona algo relacionado con pedidos, responde con 'pedido'. \
                    3. Si pregunta por horarios, responde con 'horario'. \
                    4. Si no entiendes, responde: 'No estoy seguro de cómo ayudarte con eso.'"
                },
                { role: "user", content: question.message },
            ],
        })

        res.status(200).json(response)
        
    } catch (error) {
        console.log("Ocurrio Un ERROR" ,error)
        res.status(500).json({status:"error" , error:error })
    }
})

export default chatRouter