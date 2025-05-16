import CoinComponent from "../../components/coin/coin";
import ButtonIcon from "../../components/shared/button-icon/button-icon";
import { useState } from "react";
import TrowGameButtonComponent from "../../components/trow-game-button/trow-game-button";
import refreshIcon from "../../assets/free-icon-refresh-5757986.png";
import { Buttons, FlippedCoinsContainer } from "./flipped-coin-style";

const FlippedCoinComponent = () => {
  const [resetTrigger, setResetTrigger] = useState(0)

  const resetGame = () => {
    setResetTrigger((prev) => prev + 1)
  };
  return (
    <FlippedCoinsContainer >
      <Buttons>
        <TrowGameButtonComponent />
        <ButtonIcon handleButton={resetGame}>
          <img src={refreshIcon} alt="Сбросить игру" width="40" height="40" />
        </ButtonIcon>
      </Buttons>
      <CoinComponent key={resetTrigger} />
    </FlippedCoinsContainer>

  );
};

export default FlippedCoinComponent;


