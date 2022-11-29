import { createSlice } from "@reduxjs/toolkit";
const initialcartState = { iscartvisible: false, notification: null };

const Uislice = createSlice({
  name: "ui",
  initialState: initialcartState,
  reducers: {
    Carttoggle(state, action) {
      state.iscartvisible = !state.iscartvisible;
    },
    Addnotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});
export const uiAction = Uislice.actions;
export default Uislice;
