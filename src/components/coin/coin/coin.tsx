import CoinSideComponent from "../coin-side/coin-side";
import { getRandomNumber } from "../../../utils/get-random-number";
import { CoinSide } from "../../../enums/coin";
import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { setOneCoinSuccessNum } from "../../../redux/coin-slice";
import { CoinResult } from "../../../enums/coin";
import { coinSize } from "../coin-side/coin-side-style";

const CoinComponent = () => {
  const dispatch = useDispatch();
  const selectedCoinSide = useSelector((state: RootStoreState) => state.coin.selectedCoinSide, shallowEqual);

  const [fallenSide, setFallenSide] = useState<CoinSide | null>(null);
  const [again, setAgain] = useState<boolean | null>(null);
  const prevFallenSide = useRef<CoinSide | null>(null);
  const medianValue = 5;

  const generateNewSide = useCallback(() => {
    return getRandomNumber() > medianValue ? CoinSide.TAILS : CoinSide.HEADS;
  }, [medianValue]);


  useEffect(() => {
    const newSide = generateNewSide();
    setFallenSide(newSide);
    prevFallenSide.current = newSide;
    if (newSide === selectedCoinSide) {
      dispatch(setOneCoinSuccessNum(CoinResult.INCREMENT));
    }
  }, [dispatch, selectedCoinSide, generateNewSide]);


  useEffect(() => {
    if (!again) return
    const newSide = generateNewSide();
    if (prevFallenSide.current == newSide) return
    const result =
      newSide === selectedCoinSide ? CoinResult.INCREMENT : CoinResult.DECREMENT;
    dispatch(setOneCoinSuccessNum(result));
    setFallenSide(newSide);
    prevFallenSide.current = newSide;

  }, [again, dispatch, selectedCoinSide, generateNewSide]);

  return (
    <CoinSideComponent coinSize={coinSize.max} side={fallenSide as CoinSide} handleCoin={() => setAgain((prev) => !prev)} />

  );
};

export default CoinComponent;
