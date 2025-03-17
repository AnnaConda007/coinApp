import { resetCoinSuccessNum, resetSelectedCoinSide, setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../shared/button/button";
import trowIcon from "../../assets/free-icon-reset-9899372.png";

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
        <Button handleButton={trowGame}>
            <img src={trowIcon} alt="Сбросить игру" width="20" height="20" />
        </Button >
    )
}

export default TrowGameButtonComponent