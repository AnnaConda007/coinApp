import CoinSideComponent from "../../components/coin/coin-side/coin-side";
import { CoinSide } from "../../enums/coin"
import { useDispatch } from "react-redux";
import { setSelectedCoinSide } from "../../redux/coin-slice";
import AmountCoinInput from "../../components/amount-count-input/amountCoinInput";
import { SettingsStyled, CoinSideStyled } from "./coin-settings-style";
import { CoinSize } from "../../components/coin/coin-side/coin-side-style";

const CoinSettingsComponent = () => {

  const dispatch = useDispatch();
  const selectCoinSide = (side: CoinSide): void => { dispatch(setSelectedCoinSide(side)) }

  return (



    <SettingsStyled  >

      <CoinSideStyled >
        <div onClick={() => selectCoinSide(CoinSide.TAILS)} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
          <CoinSideComponent coinSize={CoinSize.min} side={CoinSide.TAILS} />
        </div>
        <div onClick={() => selectCoinSide(CoinSide.HEADS)} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
          <CoinSideComponent coinSize={CoinSize.min} side={CoinSide.HEADS} />
        </div>
      </CoinSideStyled>

      <AmountCoinInput />

    </SettingsStyled>


  )
}

export default CoinSettingsComponent
