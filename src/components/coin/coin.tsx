import { getRandomNumber } from "../../utils/get-random-number";
import { CoinSide } from "../../enums/coin";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { CoinScene } from "../coin-scene/coin-scene";
import { SpanStyled, Container, TextContainer } from "./coin-style";
import fastIcon from "../../assets/fast.svg";
import { motion } from "framer-motion";

const CoinComponent = () => {
  const { selectedCoinSide, TotalCoinAmount } = useSelector(
    (state: RootStoreState) => state.coin,
  );
  const [fallenSide, setFallenSide] = useState<CoinSide>(CoinSide.HEADS);
  const medianValue = 5;
  const [rotate, setRotate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successSum, setSuccessSum] = useState(0);
  const [delay, setDelay] = useState(2000);
  const minForwardValue = 5;

  const fastForward = () => {
    setDelay(10);
  };

  useEffect(() => {
    if (currentIndex >= TotalCoinAmount) return;

    const currentSide =
      getRandomNumber() > medianValue ? CoinSide.TAILS : CoinSide.HEADS;
    setFallenSide(currentSide);
    setRotate(true);

    if (currentSide === selectedCoinSide) {
      setSuccessSum((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setRotate(false);
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, TotalCoinAmount, selectedCoinSide, delay]);

  return (
    <Container>
      <CoinScene scale={100} rotate={rotate} side={fallenSide as CoinSide} />

      <TextContainer>
        <SpanStyled>
          {selectedCoinSide} {successSum} из {TotalCoinAmount}
        </SpanStyled>

        {TotalCoinAmount > minForwardValue && (
          <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}>
            <motion.button
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: 1,
              }}
            >
              <img
                src={fastIcon}
                height="30px"
                alt="промотать вперед"
                onClick={fastForward}
              />
            </motion.button>
          </motion.div>
        )}
      </TextContainer>
    </Container>
  );
};

export default CoinComponent;
