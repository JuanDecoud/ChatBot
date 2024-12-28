import  { useState} from "react";
import AuthService from "../../services/auth.services";
import User from "../../interfaces/User";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../shared/loading-button/LoadingButton";

const LoginForm : React.FC= ()=>{
    const [email,setEmail] = useState<string>('email');
    const [password,setPassword]=useState<string>('password')
    const[isSuccess , setIsSuccess]= useState<boolean | null>(null)
    const [loading, setLoading] = useState<boolean> (false)
    const[message , setMessage]= useState<string>('')
    const authServices = new AuthService()
    const navigate = useNavigate()

    
    const handlerSubmit : React.FormEventHandler = async (e: React.FormEvent)=>{
        e.preventDefault();
        setLoading(true)
        const user = {email:email , password:password} as User;
        const response = await authServices.login(user);
        if('error' in response){
            setMessage("credenciales invalidas")
            setIsSuccess(false)
            setLoading(false)
        }
        else{
            setIsSuccess(true)
            setLoading(false)
            navigate("/home")
            
        }
       
          
    }
  
    return(
        <form className="row mt-5 " onSubmit={handlerSubmit} >
            <div className="col-xxl-6 offset-3 my-2"  >
                <div className="container-fluid bg-primary text-white h4 p-3 rounded">
                    Iniciar Sesión
                </div>
            </div>
            <div className="col-xxl-6  offset-3 my-2" >
                <input type="email" className="form-control form-control-lg" 
                onChange={(e)=>{setEmail(e.target.value)}}  name="email" value={email}  required/>
            </div>
            <div className="col-xxl-6  offset-3 my-2">
                <input type="password" className="form-control form-control-lg" 
                onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password} required />
            </div>
            <div className="col-xxl-6  offset-3 my-2">
                <LoadingButton 
                 loading={loading}
                 text="Confirmar"
                 className="btn-primary btn-lg"
                />
            </div>

            {message && !isSuccess && (
                <div
                className="col-xxl-8 offset-2 my-2 alert alert-danger">
                {message}
                </div>
            )}
        </form>
    )

};


export default LoginForm