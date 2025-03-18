import CoinComponent from "../coin/coin/coin";
import { RootStoreState } from "../../redux/store";
import Button from "../shared/button/button";
import { useState } from "react";
import ResultComponent from "./result/result";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { resetCoinSuccessNum } from "../../redux/coin-slice";
import TrowGameButtonComponent from "../trow-game-button/trow-game-button";
import refreshIcon from "../../assets/free-icon-refresh-5757986.png";
import { Buttons, Coins, PlantCoin } from "./plant-coinplant-style";

const PlantCoinComponent = () => {
  const dispatch = useDispatch()
  const [resetKey, setResetKey] = useState(0);
  const amountCoin = useSelector(
    (state: RootStoreState) => state.coin.TotalCoinAmount,
    shallowEqual
  );

  const amountCoinArr = Array.from({ length: amountCoin });

  const resetGame = () => {
    dispatch(resetCoinSuccessNum())
    setResetKey((prev) => prev + 1);
  };
  return (
    <PlantCoin >
      <Coins key={resetKey}>
        {amountCoinArr.map((_, i) => (
          <div key={i}>
            <CoinComponent />
          </div>
        ))}
      </Coins>

      <ResultComponent />

      <Buttons>

        <TrowGameButtonComponent />

        <Button handleButton={resetGame}>
          <img src={refreshIcon} alt="Сбросить игру" width="20" height="20" />

        </Button>
      </Buttons>

    </PlantCoin>

  );
};

export default PlantCoinComponent;


