import { getRandomNumber } from "../../../utils/get-random-number";
import { CoinSide } from "../../../enums/coin";
import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { setOneCoinSuccessNum } from "../../../redux/coin-slice";
import { CoinResult } from "../../../enums/coin";
import { CoinScene } from "../coin-side/coin-scene";
import ResultComponent from "../../result/result";

const CoinComponent = () => {
  const dispatch = useDispatch();
  const { selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)

  const [fallenSide, setFallenSide] = useState<CoinSide>(CoinSide.HEADS);
  const [again, setAgain] = useState<boolean | null>(null);
  const prevFallenSide = useRef<CoinSide | null>(null);
  const medianValue = 5;
  const [rotate, setrotate] = useState(false)

  const [trigger, setTrigger] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [res, setRes] = useState(0)
  const amountCoin = useSelector(
    (state: RootStoreState) => state.coin.TotalCoinAmount,
    shallowEqual
  );


  useEffect(() => {

    if (currentIndex < amountCoin) {
      const newSide = getRandomNumber() > medianValue ? CoinSide.TAILS : CoinSide.HEADS;

      setFallenSide(newSide)
      setrotate(true)

      if (newSide === selectedCoinSide) {
        console.log("совпало")
        setRes((prev) => prev + 1)
      }
      const timeout = setTimeout(() => {
        //  setTrigger((prev) => prev + 1); // изменяем key → пересоздание CoinScene
        setCurrentIndex((prev) => prev + 1);
        setrotate(false)

      }, 3000); // интервал между бросками
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, amountCoin, trigger]);





  return (
    <>
      {currentIndex < amountCoin ? (
        <CoinScene key={trigger} pulse={100} rotate={rotate} side={fallenSide as CoinSide} />
      ) : (

        <div>

          {selectedCoinSide} выпал {res} из {TotalCoinAmount}

        </div>)}


    </>
  );
};

export default CoinComponent;




