import CoinSettingsComponent from "./pages/coin-settings-page/coin-settings";
import { Provider } from "react-redux";
import store from "./redux/store";
import FlippedCoinComponent from "./pages/flipped-coins-page/flipped-coin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinSettingsComponent />} />
          <Route path="/toss" element={<FlippedCoinComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
