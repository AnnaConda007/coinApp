import Heads from "../coin/heads/heads"
import Tails from "../coin/tails/tails"
import { CoinSide } from "../../enums/coin"
import { useDispatch } from "react-redux";
import { selectSide } from "../../redux/winner-sellected"; 

const WinnerSideSelector = () => {  
const dispatch = useDispatch();
  
const selectCoinSide= (side:CoinSide):void=>{
     dispatch(selectSide(side));  
    }


    return (
        <><div onClick={() => selectCoinSide(CoinSide.TAILS)} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
        <Tails />
      </div>
      
      <div onClick={() => selectCoinSide(CoinSide.HEADS)} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
        <Heads />
      </div>
        </>
    )
}

export default WinnerSideSelector
 