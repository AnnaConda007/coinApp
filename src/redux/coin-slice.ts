import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinSide } from '../enums/coin';


interface CoinSetting {
  selectedCoinSide: CoinSide | null;
  TotalCoinAmount: number,
  coinSuccessNum: number

}

const initialState: CoinSetting = {
  selectedCoinSide: localStorage.getItem('selectedCoinSide') as CoinSide || CoinSide.HEADS,
  TotalCoinAmount: Number(localStorage.getItem('TotalCoinAmount')) || 0,
  coinSuccessNum: 0
};

const coinSlice = createSlice({
  name: 'coinSettings',
  initialState: initialState,

  reducers: {
    setSelectedCoinSide: (state, action: PayloadAction<CoinSide>) => {
      state.selectedCoinSide = action.payload;
      localStorage.setItem("selectedCoinSide", action.payload)
    },
    resetSelectedCoinSide: (state) => {
      state.selectedCoinSide = null;
      localStorage.setItem("selectedCoinSide", "")
    },
    setTotalCoinAmount: (state, action: PayloadAction<number>) => {
      state.TotalCoinAmount = action.payload;
      localStorage.setItem("TotalCoinAmount", action.payload.toString())
    },
    setCoinSuccessNum: (state) => {
      const newValue = state.coinSuccessNum + 1
      state.coinSuccessNum = newValue;
    },
    resetCoinSuccessNum: (state) => {
      state.coinSuccessNum = 0;
    }

  }
});

export const { setSelectedCoinSide, resetSelectedCoinSide, setTotalCoinAmount, setCoinSuccessNum, resetCoinSuccessNum } = coinSlice.actions;

export default coinSlice.reducer;
