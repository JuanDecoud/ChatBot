import React from "react";
import SideBar from "../../shared/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import ProductForm from "../../components/add-product-form/AddProductForm";
import NavBar from "../../shared/nav-bar/navBar";
import TableProducts from "../../components/table-products/TableProducts";
import ChatBot from "../../components/chatbot/ChatBot";
import ShowOrders from "../../components/show-orders/ShowOrders";

const HomePage : React.FC = ()=>{

    return (
        <div className="container-fluid w-100  h-100 p-2 p-2">
            <div className ="row h-100 p-2 ">
                <NavBar></NavBar>
                <div className="col-xxl-3 h-100 bg-body shadow shadow-m rounded p-2">
                    <SideBar></SideBar>
                </div>
                <div className ="col-xxl-9 h-100  p-2 rounded  ">
                    <Routes>
                    <Route path="chatbot" element={<ChatBot/>} ></Route>
                        <Route path="addProduct" element={<ProductForm/>} ></Route>
                        <Route path="showMenu" element={<TableProducts/>} ></Route>
                        <Route path="showOrders" element={<ShowOrders/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default HomePage