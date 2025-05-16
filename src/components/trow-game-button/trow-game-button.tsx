import { resetSelectedCoinSide, setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../shared/button-icon/button-icon";
import trowIcon from "../../assets/free-icon-close-169242.png";

const TrowGameButtonComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const trowGame = () => {
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