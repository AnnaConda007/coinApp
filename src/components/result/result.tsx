import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { CoinSide } from "../../enums/coin";
import { Result, TextResult } from "./result-style";
import { useState, useEffect } from "react";
import { CoinScene } from "../coin/coin-side/coin-scene";
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
            <CoinScene pulse={60} side={selectedCoinSide as CoinSide} />
            <TextResult>
                выпал {currentSuccessNum ? `${currentSuccessNum}` : ""} из {TotalCoinAmount}
            </TextResult>

        </Result>

    </>

    )
}



export default ResultComponent