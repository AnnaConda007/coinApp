import CoinSideComponent from "../../components/coin/coin-side/coin-side";
import { CoinSide } from "../../enums/coin"
import { useDispatch } from "react-redux";
import { setSelectedCoinSide } from "../../redux/coin-slice";
import SettingCoinInput from "../../components/setting-count/setting-coin";
import { SettingsStyled, CoinSideStyled } from "./coin-settings-style";
import { CoinSize } from "../../components/coin/coin-side/coin-side-style";
import { Scene } from "../../components/coin/coin-side/dd";
const CoinSettingsComponent = () => {

  const dispatch = useDispatch();
  const selectCoinSide = (side: CoinSide): void => { dispatch(setSelectedCoinSide(side)) }

  return (
    <SettingsStyled  >
      <SettingCoinInput />
    </SettingsStyled>
  )
}

export default CoinSettingsComponent
