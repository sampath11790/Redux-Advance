import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import Uislice from "./ui-slice";
const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    ui: Uislice.reducer,
  },
});
export default store;
