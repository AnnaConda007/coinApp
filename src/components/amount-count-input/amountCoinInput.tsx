
import Button from "../ui/button/button";
import { useDispatch } from "react-redux";
import { selectCoinAmmount } from "../../redux/winner-sellected";
 

const AmountCoinInput = () => {  
    const dispatch = useDispatch();
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value); 
        dispatch(selectCoinAmmount(value));
      }
    
   return (
    <>
       <input type="text" onInput={handleInputChange} />
       <Button handleButton={() => alert("ddddd")} value="подкинуть монетку" />        </>
   
  )
    
}

export default AmountCoinInput