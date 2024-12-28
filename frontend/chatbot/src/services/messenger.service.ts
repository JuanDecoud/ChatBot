import apiClient from "./config";
import axios from 'axios'
import LoginError from "../interfaces/LoginError";
import Messenger from "../interfaces/Messenger";

export default class MessengerService {

    public apiUrl = "/chatbot/botReponse"

    async sendMessage ( message: Messenger) : Promise<Messenger | LoginError>{
        try {
            const response = await apiClient.post<Messenger>(`${this.apiUrl}`,message)
            return response.data
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error: error.response?.data.message || 'Error desconocido' };
              }
              return { error: 'Error en el servidor' };
                
        }
      
    }


}