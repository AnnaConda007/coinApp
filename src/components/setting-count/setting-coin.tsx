
import Button from "../shared/button/button";
import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, InputContainer, Input, InputBtn } from "./setting-coin-style";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreState } from "../../redux/store";
import FlipButton from "../shared/button/flip-button/flip-button";
import { Scene } from "../coin/coin-side/dd";
import { number } from "framer-motion";

const SettingCoinInput = () => {
  const dispatch = useDispatch();
  const selectedSide = useSelector(
    (state: RootStoreState) => state.coin.selectedCoinSide,
    shallowEqual
  );
  const [isActive, setIsActive] = useState<boolean>(false)
  const navigate = useNavigate();
  const [amountCoin, setAmountCoin] = useState("0");
  const [coinScale, setCoinScale] = useState(150);

  const anim = () => {
    setCoinScale(152);
    setTimeout(() => {
      setCoinScale(150);
    }, 200);
  };



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    input = input.replace(/\D/g, "");
    input = input.replace(/^0+/, "");
    if (input === "") input = "0";
    setAmountCoin(input);
    dispatch(setTotalCoinAmount(Number(input)));
  };

  const handleIncrease = () => {
    const newValue = String(Number(amountCoin) + 1);
    setAmountCoin(newValue);
    dispatch(setTotalCoinAmount(Number(newValue)));
    anim()
  };

  const handleDecrease = () => {
    const newValue = Math.max(Number(amountCoin) - 1, 0).toString();
    setAmountCoin(newValue);
    dispatch(setTotalCoinAmount(Number(newValue)));
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    anim()
  };


  return (
    <Container>
      <Scene pulse={coinScale} />
      <InputContainer isActive={isActive}
        onFocus={() => setIsActive(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsActive(false);
          }
        }}

      >
        <InputBtn isActive={isActive} left={true} onClick={handleDecrease}
          whileTap={{ scale: 0.7 }}
        > -
        </InputBtn>
        <Input type="text" value={amountCoin} onChange={handleInputChange} />
        <InputBtn isActive={isActive} onClick={handleIncrease}
          whileTap={{ scale: 0.7 }}
        >+</InputBtn>
      </InputContainer>
      {selectedSide && (
        <FlipButton amountCoin={amountCoin} handleButton={() => navigate("/toss")}>
        </FlipButton>
      )}


    </Container>
  );
};


export default SettingCoinInput



