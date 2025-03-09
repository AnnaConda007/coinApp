interface  ButtonProps{
    handleButton?:()=>void;
    value:string
}

const Button : React.FC<ButtonProps>= ({handleButton, value}) => {   
 
   return (
    <button onClick={handleButton}>{value}</button> 
   )
}

export default Button