import CoinComponent from "../coin/coin/coin";
import { RootStoreState } from "../../redux/store";
import Button from "../ui/button/button";
import { useState } from "react";
import ResultComponent from "./result";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { resetCoinSuccessNum } from "../../redux/coin-slice";
import TrowGameButtonComponent from "../trow-game-button/trow-game-button";

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
    <>
      <div key={resetKey}>
        {amountCoinArr.map((_, i) => (
          <div key={i}>
            <CoinComponent />
            {i + 1}
          </div>
        ))}
      </div>
      <ResultComponent />
      <Button value="еще раз" handleButton={resetGame} />
      <TrowGameButtonComponent />
    </>
  );
};

export default PlantCoinComponent;
