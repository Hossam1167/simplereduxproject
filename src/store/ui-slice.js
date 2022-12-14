import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisable: false },
  reducers: {
    toggle(state) {
      state.cartIsVisable = !state.cartIsVisable;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
