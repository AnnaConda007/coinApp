import { getRandomNumber } from "../../utils/get-random-number";
import { CoinSide } from "../../enums/coin";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { CoinScene } from "../coin-scene/coin-scene";
import { SpanStyled, Container } from "./coin-style";

const CoinComponent = () => {
  const { selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)
  const [fallenSide, setFallenSide] = useState<CoinSide>(CoinSide.HEADS);
  const medianValue = 5;
  const [rotate, setRotate] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successSum, setSuccessSum] = useState(0)

  useEffect(() => {
    if (currentIndex >= TotalCoinAmount) return

    const currentSide = getRandomNumber() > medianValue ? CoinSide.TAILS : CoinSide.HEADS;
    setFallenSide(currentSide)
    setRotate(true)

    if (currentSide === selectedCoinSide) {
      setSuccessSum((prev) => prev + 1)
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setRotate(false)

    }, 3000);
    return () => clearTimeout(timeout);

  }, [currentIndex, TotalCoinAmount, selectedCoinSide]);





  return (
    <Container>

      <CoinScene pulse={100} rotate={rotate} side={fallenSide as CoinSide} />


      <SpanStyled>
        {selectedCoinSide} выпал {successSum} из {TotalCoinAmount}
      </SpanStyled>



    </Container>
  );
};

export default CoinComponent;




