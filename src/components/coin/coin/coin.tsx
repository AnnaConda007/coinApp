import HeadsComponent from "../heads/heads";
import TailsComponent from "../tails/tails";
import { getRandomNumber } from "../../../utils/get-random-number";
import { CoinSide } from "../../../enums/coin";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { setCoinSuccessNum } from "../../../redux/coin-slice";

const CoinComponent = () => {
  const selectedCoinSide = useSelector((state: RootStoreState) => state.coin.selectedCoinSide, shallowEqual);
  const dispatch = useDispatch()
  const medianValue = 5;
  const coinMap = {
    [CoinSide.HEADS]: HeadsComponent,
    [CoinSide.TAILS]: TailsComponent,
  };
  const fallenSide = getRandomNumber() > medianValue ? CoinSide.TAILS : CoinSide.HEADS;
  const FallenComponent = coinMap[fallenSide];

  useEffect(() => {
    if (fallenSide === selectedCoinSide) {
      dispatch(setCoinSuccessNum())
    }
  }, [fallenSide]);

  return <FallenComponent />;
};

export default CoinComponent;
