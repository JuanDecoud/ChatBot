import apiClient from "./config";
import axios from 'axios'
import LoginError from "../interfaces/LoginError";
import Orders from "../interfaces/Orders";

export default class OrderService {

    public apiUrl = "/orders"
   
    async getOrders (userId:string) : Promise<Orders[] | LoginError>{
        try {
            const response = await apiClient.get<Orders[]>(`${this.apiUrl}/getOrders/${userId}`)
            return response.data
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error: error.response?.data.message || 'Error desconocido' };
              }
              return { error: 'Error en el servidor' };
                
        }
      
    }


}