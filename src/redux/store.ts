import { configureStore } from "@reduxjs/toolkit"; 
import coinSlice from "./coin-slice";
 
const store = configureStore({
  reducer: { 
    coin: coinSlice,
    },
});
export type RootStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;