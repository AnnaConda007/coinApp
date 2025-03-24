import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import CoinSideComponent from "../coin/coin-side/coin-side";
import { CoinSide } from "../../enums/coin";
import { Result, TextResult } from "./result-style";
import { CoinSize } from "../coin/coin-side/coin-side-style";
import { useState, useEffect } from "react";

const ResultComponent = () => {
    const { coinSuccessNum, selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)
    const [currentSuccessNum, setCurrentSuccessNum] = useState<null | number>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentSuccessNum(coinSuccessNum);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [coinSuccessNum])


    return (<>
        <Result  >
            <CoinSideComponent coinSize={CoinSize.min} side={selectedCoinSide as CoinSide} />
            <TextResult>
                выпал {currentSuccessNum ? `${currentSuccessNum}` : ""} из {TotalCoinAmount}
            </TextResult>

        </Result>

    </>

    )
}



export default ResultComponent