
import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { FC, useState } from "react";
import { InputContainerStyled, InputStyled, InputBtnStyled } from "./count-input-style";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";

interface SettingInputProps {
    coinPulseAnimate: () => void
}

const SettingInputComponent: FC<SettingInputProps> = ({ coinPulseAnimate }) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState<boolean>(false)
    const amountCoin = useSelector((state: RootStoreState) => state.coin.TotalCoinAmount);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.target.value;
        input = input.replace(/\D/g, "");
        input = input.replace(/^0+/, "");
        const nullValue = "0"
        const emptyValue = ""
        if (input === emptyValue) input = nullValue;
        dispatch(setTotalCoinAmount(Number(input)));
    };

    const handleIncrease = () => {
        const newValue = String(Number(amountCoin) + 1);
        dispatch(setTotalCoinAmount(Number(newValue)));
        coinPulseAnimate()
    };

    const handleDecrease = () => {
        const newValue = Math.max(Number(amountCoin) - 1, 0).toString();
        dispatch(setTotalCoinAmount(Number(newValue)));
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        coinPulseAnimate()
    };


    return (
        <InputContainerStyled isActive={isActive}
            onFocus={() => setIsActive(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsActive(false);
                }
            }}
        >
            <InputBtnStyled isActive={isActive} left={true} onClick={handleDecrease}
                whileTap={{ scale: 0.7 }}
            > -
            </InputBtnStyled>
            <InputStyled type="text" value={amountCoin} onChange={handleInputChange} />
            <InputBtnStyled isActive={isActive} onClick={handleIncrease}
                whileTap={{ scale: 0.7 }}
            >+</InputBtnStyled>
        </InputContainerStyled>


    );
};


export default SettingInputComponent



