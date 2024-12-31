

interface ButtonsProps {
    loading : boolean,
    text:string,
    className?:string
    children?: React.ReactNode;
    onClick?: () => void;
}

const LoadingButton : React.FC<ButtonsProps> = ({loading,text,className,children , onClick })=>{
    const handleClick: () => void = onClick || (() => {});
    return (
        
        <button className={`btn ${className}`}  disabled={loading}  onClick={handleClick}>
         {
            loading? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ):(<>{text} {children}</>)
         }
            
        </button>
    )
}

export default LoadingButton