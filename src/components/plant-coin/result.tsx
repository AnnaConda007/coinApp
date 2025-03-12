import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";

const ResultComponent = () => {
    const { coinSuccessNum, selectedCoinSide, TotalCoinAmount } = useSelector((state: RootStoreState) => state.coin)

    return (<>
        {selectedCoinSide} выпал {coinSuccessNum} из {TotalCoinAmount}
    </>

    )
}



export default ResultComponent