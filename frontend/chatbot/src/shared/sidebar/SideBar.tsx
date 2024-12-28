import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar: React.FC = ()=>{

    return (
        <ul className="list-group h-100 ">
        <li className ="list-group-item">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="27" fill="currentColor" className="bi bi-list mx-1" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg> Menu
        </li>
        <NavLink to="/home/chatbot" 
            className={({ isActive }) => 
            isActive
                ? "list-group-item active bg-primary text-white"  
                : "list-group-item"  
            }
        >
        ChatBot
        </NavLink>
        
        
        <NavLink to="/home/addProduct" 
            className={({ isActive }) => 
            isActive
                ? "list-group-item active bg-primary text-white"  
                : "list-group-item"  
            }
        >
        Agregar Plato
        </NavLink>
        <NavLink to="/home/showMenu"
            className={({isActive})=>
                isActive
                ? "list-group-item active bg-primary text-white"
                :"list-group-item"
            }
            >Ver Carta
        </NavLink>
        </ul>
    )
}

export default SideBar