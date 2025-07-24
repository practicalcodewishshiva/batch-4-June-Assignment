import { createSlice } from "@reduxjs/toolkit";
export const LoginSlice = createSlice({
  name: "login_form",
  initialState: {
    userName: "",
    password: "",
  },
  reducers: {
    updateUserNameGlobally: (initialState, action) => {
      initialState.userName = action.payload;
    },
    updatePasswordGlobally: (initialState, action) => {
      initialState.password = action.payload;
    },
  },
});

export const { updateUserNameGlobally, updatePasswordGlobally } = LoginSlice.actions;

export default LoginSlice.reducer;
