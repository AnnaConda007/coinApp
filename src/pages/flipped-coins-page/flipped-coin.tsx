import CoinComponent from "../../components/coin/coin/coin";
import { RootStoreState } from "../../redux/store";
import Button from "../../components/shared/button/button";
import { useState } from "react";
import ResultComponent from "../../components/result/result";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { resetCoinSuccessNum } from "../../redux/coin-slice";
import TrowGameButtonComponent from "../../components/trow-game-button/trow-game-button";
import refreshIcon from "../../assets/free-icon-refresh-5757986.png";
import { Buttons, Coins, FlippedCoinsContainer } from "./flipped-coin-style";

const FlippedCoinComponent = () => {
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
    <FlippedCoinsContainer >


      <ResultComponent />

      <Buttons>

        <TrowGameButtonComponent />

        <Button handleButton={resetGame}>
          <img src={refreshIcon} alt="Сбросить игру" width="40" height="40" />

        </Button>
      </Buttons>

      <Coins key={resetKey}>
        {amountCoinArr.map((_, i) => (
          <div key={i}>
            <CoinComponent />
          </div>
        ))}
      </Coins>

    </FlippedCoinsContainer>

  );
};

export default FlippedCoinComponent;


