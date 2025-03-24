
import Button from "../shared/button/button";
import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import nextIcon from "../../assets/free-icon-next-button-7117502.png";
import { Container, InputContainer, Input, InputBtn } from "./setting-coin-style";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreState } from "../../redux/store";

const SettingCoinInput = () => {
  const dispatch = useDispatch();
  const selectedSide = useSelector(
    (state: RootStoreState) => state.coin.selectedCoinSide,
    shallowEqual
  );
  const navigate = useNavigate();
  const [amountCoin, setAmountCoin] = useState("0");


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
  };

  const handleDecrease = () => {
    const newValue = Math.max(Number(amountCoin) - 1, 0).toString();
    setAmountCoin(newValue);
    dispatch(setTotalCoinAmount(Number(newValue)));
  };

  return (
    <Container>
      <InputContainer>
        <InputBtn onClick={handleDecrease}>-</InputBtn>
        <Input type="text" value={amountCoin} onChange={handleInputChange} />
        <InputBtn onClick={handleIncrease}>+</InputBtn>
      </InputContainer>
      {selectedSide && amountCoin !== "0" && (
        <Button handleButton={() => navigate("/toss")}>
          <img src={nextIcon} alt="далее" width="20" height="20" />
        </Button>
      )}


    </Container>
  );
};


export default SettingCoinInput



