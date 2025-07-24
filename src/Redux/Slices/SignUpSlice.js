import { createSlice } from "@reduxjs/toolkit";
// initialState global State
export const SignUpSlice = createSlice({
  name: "login_form",
  initialState: {
    value: 0,
    userName: "signup",
    password: "347563745",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = SignUpSlice.actions;

export default SignUpSlice.reducer;
