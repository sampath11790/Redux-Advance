import { createSlice } from "@reduxjs/toolkit";
const initialcartState = { iscartvisible: false };

const Uislice = createSlice({
  name: "ui",
  initialState: initialcartState,
  reducers: {
    Carttoggle(state, action) {
      state.iscartvisible = !state.iscartvisible;
    },
  },
});
export const uiAction = Uislice.actions;
export default Uislice;
