import React, { useEffect, useState } from "react";
import Orders from "../../interfaces/Orders";
import AuthService from "../../services/auth.services";
import OrderService from "../../services/orders.services";

const ShowOrders : React.FC = ()=>{
    const [orders, setOrders] = useState<Orders[]>([])
    const [error,setError] = useState<string|null>(null)
    const [isloading,setLoading] = useState<boolean>(false)
    

    useEffect( ()=>{
        const authService = new AuthService();
        const orderService = new OrderService();
        const fetchProducts = async()=>{
            setLoading(true)
            const user = await authService.validateSession();
            if("error" in user){
                setError(user.error)
                setLoading(false)
            }
            else{
                const orders =  await orderService.getOrders(user.id);
                
                if("error" in orders){
                    setError(orders.error)
                    setLoading(false)
                }
                else{
                    setLoading(false)
                    setOrders(orders)

                }
            }

        }
        fetchProducts()

    },[])


    return (
        <div className="d-flex w-100 flex-wrap p-3 ">
            <div className="container-fluid h4 text-white bg-primary p-3 rounded">
                Pedidos Realizados
            </div>
           {
                error? (
                    <div className ="container-fluid bg-danger text-white">
                        Ocurrio un error
                    </div>
                ):("")
            }
            {
                orders.length > 0 ?
                (
                    orders.map((order)=>(
                       order.products.map((productData)=>(
                        <div className="card mx-2 mt-2" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Plato: {productData.product.productId.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Fecha: {order.date}</li>
                                <li className="list-group-item">Cantidad: {productData.product.quantity}</li>
                                <li className="list-group-item">  Precio: $ {(productData.product.price * productData.product.quantity).toLocaleString('es', { minimumFractionDigits:2 })}</li>
                                <li className="list-group-item">Estado: {order.status}</li>
                            </ul>
                        </div>

                       ))
                    ))
                ): 
                (
                    isloading?(
                        <div className="d-flex justify-content-center w-100 mt-4" style={{ width: "3rem", height: "3rem"}}>
                            <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem"}}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ):(
                        <div className="alert bg-danger w-100">
                            <td >No hay pedidos realizados.</td>
                        </div>
                    )
    
                )
            }


        </div>

    )
}

export default ShowOrders