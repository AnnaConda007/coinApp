import { resetCoinSuccessNum, resetSelectedCoinSide, setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../ui/button/button";

const TrowGameButtonComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const trowGame = () => {
        dispatch(resetCoinSuccessNum())
        dispatch(setTotalCoinAmount(0))
        dispatch(resetSelectedCoinSide())
        navigate("/")
    }

    return (
        <Button value="сбросить" handleButton={trowGame} />
    )
}

export default TrowGameButtonComponent