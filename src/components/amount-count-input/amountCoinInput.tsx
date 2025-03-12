
import Button from "../ui/button/button";
import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";


const AmountCoinInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    dispatch(setTotalCoinAmount(value));
  }

  return (
    <>
      <input type="text" onInput={handleInputChange} />
      <Button handleButton={() => navigate("/toss")} value="подкинуть монетку" />
    </>

  )

}

export default AmountCoinInput