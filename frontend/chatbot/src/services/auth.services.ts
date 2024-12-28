import apiClient from "./config";
import axios from 'axios'

import User from "../interfaces/User";
import LoginError from "../interfaces/LoginError";

export default class AuthService {

    public apiUrl = "/user/auth"

    async login ( user: User) : Promise<User | LoginError>{
        try {
            const response = await apiClient.post<User>(`${this.apiUrl}`,user)
            return response.data
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error: error.response?.data.message || 'Error desconocido' };
              }
              return { error: 'Error en el servidor' };
                
        }
      
    }


}