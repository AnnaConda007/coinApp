import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import CoinSideComponent from "../coin/coin-side/coin-side";
import { CoinSide } from "../../enums/coin";
import { Result, TextResult } from "./result-style";
import { CoinSize } from "../coin/coin-side/coin-side-style";


const ResultComponent = () => {
    const { coinSuccessNum, selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)

    return (<>
        <Result  >
            <CoinSideComponent coinSize={CoinSize.min} side={selectedCoinSide as CoinSide} />
            <TextResult> выпал {coinSuccessNum} из {TotalCoinAmount}</TextResult>
        </Result>

    </>

    )
}



export default ResultComponent