import Heads from "../coin/heads/heads"
import Tails from "../coin/tails/tails"
import { CoinSide } from "../../enums/coin"
import { useDispatch } from "react-redux";
import { setSelectedCoinSide } from "../../redux/coin-slice";
import AmountCoinInput from "../amount-count-input/amountCoinInput";

const CoinSideSelectorComponent = () => {

  const dispatch = useDispatch();
  const selectCoinSide = (side: CoinSide): void => { dispatch(setSelectedCoinSide(side)) }

  return (
    <>
      <AmountCoinInput />
      <div onClick={() => selectCoinSide(CoinSide.TAILS)} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
        <Tails />
      </div>

      <div onClick={() => selectCoinSide(CoinSide.HEADS)} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
        <Heads />
      </div>
    </>
  )
}

export default CoinSideSelectorComponent
