import CoinComponent from "../../components/coin/coin";
import { useState } from "react";
import TrowGameButtonComponent from "../../components/trow-game-button/trow-game-button";
import { Buttons, FlippedCoinsContainer } from "./flipped-coin-style";
import refreshIcon from "../../assets/refresh-icon.svg";
import ButtonIcon from "../../shared/button-icon/button-icon";
const FlippedCoinComponent = () => {
  const [resetTrigger, setResetTrigger] = useState(0)

  const resetGame = () => {
    setResetTrigger((prev) => prev + 1)
  };
  return (
    <FlippedCoinsContainer >
      <CoinComponent key={resetTrigger} />

      <Buttons>
        <TrowGameButtonComponent />
        <ButtonIcon handleButton={resetGame}>
          <img src={refreshIcon} alt="Сбросить игру" width="40" height="40" />
        </ButtonIcon>
      </Buttons>
    </FlippedCoinsContainer>

  );
};

export default FlippedCoinComponent;


