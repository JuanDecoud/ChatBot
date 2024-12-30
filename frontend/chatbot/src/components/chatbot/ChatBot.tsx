import React, { KeyboardEventHandler, useEffect, useState } from "react";
import LoadingButton from "../../shared/loading-button/LoadingButton";
import Messenger from "../../interfaces/Messenger";
import MessengerService from "../../services/messenger.service";

const ChatBot: React.FC = ()=>{

    const [isLoading,setLoading]=useState<boolean>(false)
    const [message, setMessage]= useState<Messenger>({sender:"" , message:""})
    const [input,setValue] = useState<string>("")
    const [chatHistory, setHistory] = useState<Messenger[]>([])
    const messengerService = new MessengerService()

    const handlerSubmit : React.FormEventHandler = async (e: React.FormEvent)=>{
        e.preventDefault();
        setLoading(true)
        const message = {sender:"user", message:input} as Messenger
        setMessage(message)
        setHistory(prevHistory=> [...prevHistory,message])
        const response = await messengerService.sendMessage(message);
        if('error' in response){setLoading(false)}
        else{
            setValue("")
            const botresponse = response
            setHistory(prevHistory=> [...prevHistory,botresponse])
            setLoading(false)
        }       
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handlerSubmit(e as any);
        }
      };



    useEffect(()=>{
        setHistory([{sender:"Bot" , message:"Bienvenido, soy tu asistente virtual,¿En que puedo Ayudarte?."}])
    },[])

    
    return (
        <div className ="d-flex w-100 justify-content-center ">
            <div className="row mt-1 w-100">
                <div className="col-xxl-12">
                    <div className="container-fluid w-100 bg-primary text-white h4 p-3 rounded">
                        Bienvenido a ChatBot
                    </div>
                </div>
                <div className ="col-xxl-12"  >
                    <div className="col-xxl-12">
                        <div className="container-fluid w-100 border border-1 p-2 overflow-auto"   style={{ height: "500px" }} >
                        {
                                chatHistory.map(
                                    (msg,index)=>(
                                        <div key={index} className={`p-2 shadow shadow-s rounded my-2
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
                <form className ="col-xxl-12" onSubmit={handlerSubmit}  >
                    <textarea name="message" className="form-control mt-2" aria-label="With textarea" style={{ height: "85px" }} placeholder="Escribe tu consulta." required onChange={(e)=>setValue(e.target.value)} value={input} onKeyDown={handleEnter}></textarea>
                    <LoadingButton text="Enviar" loading={isLoading} className="btn btn-primary btn-lg mt-2"></LoadingButton>
                </form>
            </div>
          

          
        </div>
    )
}

export default ChatBot