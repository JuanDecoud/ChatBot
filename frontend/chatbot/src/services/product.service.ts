import apiClient from "./config";
import axios from 'axios'
import Product from "../interfaces/Product";
import LoginError from "../interfaces/LoginError";

export default class ProductService {

    public apiUrl = "/product"

    async addProduct ( product: Product) : Promise<Product | LoginError>{
        try {
            const response = await apiClient.post<Product>(`${this.apiUrl}/addProduct`,product)
            return response.data
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error: error.response?.data.message || 'Error desconocido' };
              }
              return { error: 'Error en el servidor' };
                
        }
      
    }

    async getProducts () : Promise<Product[] | LoginError>{
        try {
            const response = await apiClient.get<Product[]>(`${this.apiUrl}/getProducts`)
            return response.data
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error: error.response?.data.message || 'Error desconocido' };
              }
              return { error: 'Error en el servidor' };
                
        }
      
    }


}