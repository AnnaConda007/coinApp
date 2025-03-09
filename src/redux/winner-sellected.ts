import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinSide } from '../enums/coin';
 

interface CoinState {
    winnerSide: CoinSide | null;
    coinAmmount:number
  }
  
const initialState: CoinState = {
    winnerSide: null,
    coinAmmount: 1
  };

const coinSlice = createSlice({
  name: 'sellectedSide',  
  initialState: initialState,

  reducers: {
    selectSide: (state, action:PayloadAction<CoinSide >) => {
      state.winnerSide = action.payload;
    },
    selectCoinAmmount: (state, action:PayloadAction<number >) => {
      state.coinAmmount = action.payload;
    },
    resetCoin: (state) => { 
      state.winnerSide = null;
    }
  }
});

 export const { selectSide, resetCoin, selectCoinAmmount } = coinSlice.actions;

 export default coinSlice.reducer;
