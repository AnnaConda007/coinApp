
import Button from "../shared/button/button";
import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import "./amount-coin-input.css"
import { useState } from "react";
import nextIcon from "../../assets/free-icon-next-button-7117502.png";

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
    <div className="container">
      <div className="input-container">
        <button onClick={handleDecrease} className="input-btn decrease-btn">-</button>
        <input type="number" value={value} onInput={handleInputChange} />
        <button onClick={handleIncrease} className=" input-btn increase-btn">+</button>
      </div>
      <Button handleButton={() => navigate("/toss")}  >
        <img src={nextIcon} alt="далее" width="20" height="20" />
      </Button>
    </div>

  )

}

export default AmountCoinInput



