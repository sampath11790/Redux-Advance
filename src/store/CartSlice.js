import { createSlice } from "@reduxjs/toolkit";
const initialcartState = { Totalquantity: 0, items: [] };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialcartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.Totalquantity = state.Totalquantity + 1;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          name: newItem.title,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalprice = exisitingItem.totalprice + newItem.price;
      }
    },
    RemoveItem(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.Totalquantity = state.Totalquantity - 1;
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity--;
        // exisitingItem.totalprice =
        //   exisitingItem.totalprice - exisitingItem.price;
      }
    },
  },
});
export const cartSliceAction = CartSlice.actions;
export default CartSlice;
