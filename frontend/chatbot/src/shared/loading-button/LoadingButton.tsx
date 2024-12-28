interface ButtonsProps {
    loading : boolean,
    text:string,
    className?:string
}

const LoadingButton : React.FC<ButtonsProps> = ({loading,text,className =""})=>{
    return (
        <button className={`btn ${className}`}  disabled={loading} >
         {
            loading? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ):(text)
         }
            
        </button>
    )
}

export default LoadingButton