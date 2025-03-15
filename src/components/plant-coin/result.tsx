import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import CoinSideComponent from "../coin/coin-side/coin-side";
import { CoinSide } from "../../enums/coin";

const ResultComponent = () => {
    const { coinSuccessNum, selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)

    return (<>
        ------------------------------------------
        <CoinSideComponent side={selectedCoinSide as CoinSide} />
        выпал {coinSuccessNum} из {TotalCoinAmount}
    </>

    )
}



export default ResultComponent