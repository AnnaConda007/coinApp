import './App.css';
import CoinSideSelectorComponent from './components/coin-side-sellector/coin-side-selector';
import { Provider } from "react-redux";
import store from './redux/store';
import PlantCoinComponent from './components/plant-coin/plant-coin';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinSideSelectorComponent />} />
          <Route path="/toss" element={<PlantCoinComponent />} />
        </Routes>

      </BrowserRouter>

    </Provider>
  );
}

export default App;
