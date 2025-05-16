
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "./setting-coin-style";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreState } from "../../redux/store";
import MainButton from "../shared/main-button/main-button";
import { CoinScene } from "../coin-scene/coin-scene";
import SettingInputComponent from "../count-input/count-input";

const SettingCoin = () => {
  const selectedSide = useSelector(
    (state: RootStoreState) => state.coin.selectedCoinSide,
    shallowEqual
  );

  const navigate = useNavigate();
  const amountCoin = useSelector((state: RootStoreState) => state.coin.TotalCoinAmount);
  const [coinScale, setCoinScale] = useState(150);
  const nullValue = "0"
  const coinPulseAnimate = () => {
    setCoinScale(152);
    setTimeout(() => {
      setCoinScale(150);
    }, 200);
  };



  return (
    <Container>
      <CoinScene pulse={coinScale} orbit={true} />
      <SettingInputComponent coinPulseAnimate={coinPulseAnimate} />

      {selectedSide && amountCoin.toString() !== nullValue && (
        <MainButton key={amountCoin}
          text={"FLIP"} handleButton={() => navigate("/toss")}>
        </MainButton>
      )}


    </Container>
  );
};


export default SettingCoin



