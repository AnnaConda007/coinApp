import './App.css';
import Coin from './components/coin/coin/coin';
import WinnerSideSelector from './components/winner-side-sellector/winner-side-selector';
import { Provider } from "react-redux";
import store from './redux/store';
import AmountCoinInput from './components/amount-count-input/amountCoinInput';
function App() {
  return ( 
    <Provider store={store}>
      <Coin />
      <WinnerSideSelector />
      <AmountCoinInput/>
    </Provider>
  );
}

export default App;
