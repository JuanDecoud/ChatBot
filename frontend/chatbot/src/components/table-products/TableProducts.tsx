import React, { useEffect, useState } from "react";
import Product from "../../interfaces/Product";
import ProductService from "../../services/product.service";


const TableProducts : React.FC = ()=>{
    const [products, setProducts] = useState<Product[]>([]); 
    const [error, setError] = useState<string | null>(null); 
    const [isloading,setLoading] = useState<boolean>(false)
    
  
    useEffect(() => {
        setLoading(true)
        const productService = new ProductService();
        const fetchProducts = async () => {
        const result = await productService.getProducts();
            if ('error' in result) {
                console.log(result.error)
                setLoading(false)
                setError(result.error); 
            } else {
                setLoading(false)
                setProducts(result); 
            }
        };

        fetchProducts(); 
    }, []); 

    return (
    
        <div className="table-responsive">
            {
                error? (
                    <div className ="container-fluid bg-danger text-white">
                        Ocurrio un error
                    </div>
                ):("")
            }
     
            <div className="container-fluid bg-primary p-3 text-white h4 rounded">Carta</div>
            <table className="table table-light table-hover text-center table-bordered">
                <thead>
                    <tr className="table-primary">
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.code}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price.toLocaleString("es",{minimumFractionDigits:2})}</td>
                            </tr>
                        ))
                    ) :                 (
                        isloading?(
                            <tr  >
                                <td colSpan={3}  >
                                <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                                    < span className="visually-hidden">Loading...</span>
                                </div>
                                                                    
                                </td>
                            </tr>
                        ):(
                            <div className="alert bg-danger w-100">
                                <td >No hay productos para listar</td>
                            </div>
                        )
        
                    )}
                </tbody>
            </table>
        </div>
    );
};


export default TableProducts


