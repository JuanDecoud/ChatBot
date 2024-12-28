import React, { useEffect, useState } from "react";
import LoadingButton from "../../shared/loading-button/LoadingButton";
import Messenger from "../../interfaces/Messenger";


const ChatBot: React.FC = ()=>{
    const [isLoading,setLoading]=useState<boolean>(false)

    const [message,setMessage]= useState<string>("")
    const [chatHistory, setHistory] = useState<Messenger[]>([])

    useEffect(()=>{
        setHistory([{sender:"Bot" , message:"Bienvenido, soy tu asistente virtual, ¿En que puedo ayudarte?."}])
    },[])

    
    return (
        <div className ="container-fluid">
            <div className="row">
                <div className="col-xxl-12">
                    <div className="container-fluid w-100 bg-primary text-white h4 p-3 rounded">
                        Bienvenido a ChatBot
                    </div>
                </div>
                <div className ="col-xxl-12"  >
                    <div className="container-fluid w-100 border border-1 p-2"   style={{ height: "400px" }} >
                       {
                            chatHistory.map(
                                (msg,index)=>(
                                    <div key={index} className={`p-2 shadow shadow-s rounded my-1
                                    ${msg.sender==="Bot"? "bg-warning ": "bg-body"} `}
                                    >
                                        {msg.sender}:    {msg.message}
                                    </div>
                                )
                            )
                       }
                    </div>
                </div>
            </div>
       
            <textarea className="form-control mt-2" aria-label="With textarea" style={{ height: "85px" }} placeholder="Escribe tu consulta."></textarea>
            <LoadingButton text="Enviar" loading={isLoading} className="btn btn-primary btn-lg mt-2" ></LoadingButton>
          
        </div>
    )
}

export default ChatBot