import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterApp",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      state.count += action.payload;
    },
    deleteproduct: (state, action) => {
      state.count -= action.payload;
    },
     resetProduct: (state) => {
      state.count = 0
    },
  },

});

export const { addNewProduct, deleteproduct, resetProduct } = counterSlice.actions;

export default counterSlice.reducer;
