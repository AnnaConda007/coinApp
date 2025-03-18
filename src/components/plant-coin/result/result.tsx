import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import CoinSideComponent from "../../coin/coin-side/coin-side";
import { CoinSide } from "../../../enums/coin";
import { Result } from "./result-style";
import { coinSize } from "../../coin/coin-side/coin-side-style";


const ResultComponent = () => {
    const { coinSuccessNum, selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)

    return (<>
        <Result  >
            <CoinSideComponent coinSize={coinSize.min} side={selectedCoinSide as CoinSide} />
            выпал {coinSuccessNum} из {TotalCoinAmount}
        </Result>

    </>

    )
}



export default ResultComponent