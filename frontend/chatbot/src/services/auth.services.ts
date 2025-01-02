import apiClient from "./config";
import axios from 'axios'

import User from "../interfaces/User";
import LoginError from "../interfaces/LoginError";
import LogOutResponse from "../interfaces/LogOutResponse";

export default class AuthService {

    public apiUrl = "/user/auth"

    async login ( user: User) : Promise<User | LoginError>{
        try {
            const response = await apiClient.post<User>(`${this.apiUrl}`,user);
            return response.data;
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error: error.response?.data.message || 'Error desconocido' };
              }
              return { error: 'Error en el servidor' };
                
        }
      
    }

    async validateSession(): Promise <User | LoginError> {
      try {
          const response = await apiClient.get<User>("/user/session");
          return response.data
      } catch (error) {
        if(axios.isAxiosError(error)){
          return { error: error.response?.data.message  };
        }
        return {error:"error en el servidor"}
      }
    }

    

    async logout(): Promise<LogOutResponse | LoginError> {
        try {
          sessionStorage.removeItem("user")
          const response = await apiClient.get<{ status: string; message: string }>(
            "/user/logout"
          );
          return response.data;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return {
              error: error.response?.data.message || "Error desconocido",
            };
          }
          return { error: "Error en el servidor" };
        }
      }
}



