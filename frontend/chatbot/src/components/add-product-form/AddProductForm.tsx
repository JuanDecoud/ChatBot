import React, { FormEventHandler, useEffect, useState } from "react";
import LoadingButton from "../../shared/loading-button/LoadingButton";
import ProductService from "../../services/product.service";
import Product from "../../interfaces/Product";

const ProductForm: React.FC = ()=>{

    const productService = new ProductService()

    let [formData, setFormData] = useState({
        code: "",
        name: "",
        price: 0,
        description: "",
    });
    const [loading,setLoading] = useState<boolean>(false);
    const[message , setMessage]= useState<string>('');
    const[isSuccess , setIsSuccess]= useState<boolean | null>(null);

    useEffect(() => {
        if (message) {
         
          const timeout = setTimeout(() => {
            setMessage("")
          }, 1500);
    
          return () => clearTimeout(timeout);
        }
      }, [message]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit : FormEventHandler = async(e:React.FormEvent)=>{
        e.preventDefault();
        const product = formData as Product;
        const response = await productService.addProduct(product);
        
        if('error' in response){
        
            setMessage("credenciales invalidas");
            setIsSuccess(false);
            setLoading(false);
        }
        else{
            setFormData({  code: "",
                name: "",
                price: 0,
                description: ""})
            setMessage("Producto Agregado con exito")
            setIsSuccess(true);
            setLoading(false);
           
        }
    }

    return (
        <form className="row" onSubmit={handleSubmit} >
            <div className ="col-xxl-8 offset-xxl-2 ">
                <div className="container-fluid bg-primary p-3 text-white h4 rounded">
                    Agregar Producto
                </div>
            </div>
          
            <div className ="col-xxl-8 offset-xxl-2 mt-1">
                <input type="text" name="code" className=" form-control form-control-lg" value={formData.code} 
                 onChange={handleChange}
                placeholder="codigo" required
                />
            </div>
            <div className ="col-xxl-8 offset-xxl-2 mt-1">
                <input type="text" name="name" className=" form-control form-control-lg" value={formData.name}
                onChange={handleChange} 
                placeholder="nombre" required/>
            </div>
            <div className ="col-xxl-8 offset-xxl-2 mt-1">
                <input type="number" name="price" className=" form-control form-control-lg" value={formData.price}
                 onChange={handleChange}
                 placeholder="precio" required/>
            </div>
            <div className ="col-xxl-8 offset-xxl-2 mt-1">
                <input type="text" name="description" className=" form-control form-control-lg" value={formData.description} 
                onChange={handleChange}
                placeholder="descripción" required/>
            </div>
            <div className ="col-xxl-8 offset-xxl-2 mt-2">
                <LoadingButton text="Confirmar" loading={loading} className="btn btn-primary btn-lg" ></LoadingButton>
            </div>
            {message && !isSuccess && (
                <div
                className="col-xxl-8 offset-3 my-2 alert alert-danger">
                {message}
                </div>
            )
            }

            {isSuccess && message && (
                <div className="col-xxl-6 offset-3 my-2 alert alert-success">
                    {message}
                </div>
            )}

        </form>
    )
}

export default ProductForm