

import { resetSelectedCoinSide, setTotalCoinAmount } from "../../redux/coin-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ButtonIcon from "../../shared/button-icon/button-icon";
import trowIcon from "../../assets/close.svg";

const TrowGameButtonComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const trowGame = () => {
        dispatch(setTotalCoinAmount(0))
        dispatch(resetSelectedCoinSide())
        navigate("/")
    }

    return (
        <ButtonIcon handleButton={trowGame}>
            <img src={trowIcon} alt="Сбросить игру" width="20" height="20" />
        </ButtonIcon >
    )
}

export default TrowGameButtonComponent