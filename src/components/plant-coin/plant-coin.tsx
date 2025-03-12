import CoinComponent from "../coin/coin/coin";
import { RootStoreState } from "../../redux/store";
import Button from "../ui/button/button";
import { useState } from "react";
import ResultComponent from "./result";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { resetFaceSuccess } from "../../redux/coin-slice";

const PlantCoinComponent = () => {
  const dispatch = useDispatch()
  const [resetKey, setResetKey] = useState(0);

  const amountCoin = useSelector(
    (state: RootStoreState) => state.coin.TotalCoinAmount,
    shallowEqual
  );
  const amountCoinArr = Array.from({ length: amountCoin });

  const resetGame = () => {
    dispatch(resetFaceSuccess())
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
    </>
  );
};

export default PlantCoinComponent;
