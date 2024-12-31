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
                <div className='d-inline-flex justify-content-start w-100 align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className=" me-2 bi bi-robot" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
                </svg>
          
                    <div className='d-flex'>
                        ChatBot
                    </div>

            </div>
        </NavLink>
        
        
        <NavLink to="/home/addProduct" 
            className={({ isActive }) => 
            isActive
                ? "list-group-item active bg-primary text-white"  
                : "list-group-item"  
            }
        >
        <div className='d-inline-flex justify-content-start w-100 align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className=" me-2 bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg> 
            <div className='d-flex'>
                Producto
            </div>

        </div>
        </NavLink>
        <NavLink to="/home/showMenu"
            className={({isActive})=>
                isActive
                ? "list-group-item active bg-primary text-white"
                :"list-group-item"
            }
            >
                <div className='d-inline-flex justify-content-start w-100 align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className=" me-2 bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <div className='d-flex'>
                        Menú
                    </div>

                </div>

            
        </NavLink>
        </ul>
    )
}

export default SideBar