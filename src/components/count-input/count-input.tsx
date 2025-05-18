import { useDispatch } from "react-redux";
import { setTotalCoinAmount } from "../../redux/coin-slice";
import { FC, useState } from "react";
import {
  InputContainerStyled,
  InputStyled,
  InputBtnStyled,
} from "./count-input-style";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";

interface SettingInputProps {
  coinPulseAnimate: () => void;
}

const SettingInputComponent: FC<SettingInputProps> = ({ coinPulseAnimate }) => {
  const dispatch = useDispatch();
  const [$isActive, set$isActive] = useState<boolean>(false);
  const amountCoin = useSelector(
    (state: RootStoreState) => state.coin.TotalCoinAmount,
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    const prevValue = amountCoin;

    if (prevValue === 0) {
      input = input.replace(/0/g, "");
    }

    dispatch(setTotalCoinAmount(Number(input)));
  };

  const handleIncrease = () => {
    const newValue = String(Number(amountCoin) + 1);
    dispatch(setTotalCoinAmount(Number(newValue)));
    coinPulseAnimate();
  };

  const handleDecrease = () => {
    const newValue = Math.max(Number(amountCoin) - 1, 0).toString();
    dispatch(setTotalCoinAmount(Number(newValue)));
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    coinPulseAnimate();
  };

  return (
    <InputContainerStyled
      $isActive={$isActive}
      onFocus={() => set$isActive(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          set$isActive(false);
        }
      }}
    >
      <InputBtnStyled
        $isActive={$isActive}
        $left={true}
        onClick={handleDecrease}
        whileTap={{ scale: 1.1 }}
      >
        {" "}
        -
      </InputBtnStyled>
      <InputStyled
        type="text"
        value={String(amountCoin)}
        onChange={handleInputChange}
      />
      <InputBtnStyled
        $isActive={$isActive}
        onClick={handleIncrease}
        whileTap={{ scale: 1.1 }}
      >
        +
      </InputBtnStyled>
    </InputContainerStyled>
  );
};

export default SettingInputComponent;
