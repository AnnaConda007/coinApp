
import Button from "../shared/button/button";
import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import nextIcon from "../../assets/free-icon-next-button-7117502.png";
import { Container, InputContainer, Input, InputBtn } from "./amount-coin-input-style";

const AmountCoinInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0)


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    dispatch(setTotalCoinAmount(value));
    setValue(value)
  }


  const handleIncrease = () => {
    setValue((prew) => (prew + 1))
    dispatch(setTotalCoinAmount(value + 1));

  }
  const handleDecrease = () => {
    setValue((prew) => (prew - 1))
    dispatch(setTotalCoinAmount(value - 1));
  }

  return (
    <Container>
      <InputContainer>
        <InputBtn onClick={handleDecrease}>-</InputBtn>
        <Input type="number" value={value} onInput={handleInputChange} />
        <InputBtn onClick={handleIncrease}>+</InputBtn>
      </InputContainer>
      <Button handleButton={() => navigate("/toss")}>
        <img src={nextIcon} alt="далее" width="20" height="20" />
      </Button>
    </Container>
  );
};



export default AmountCoinInput



