import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Redux/Slices/LoginSlice";
import SignUpSlice from "./Redux/Slices/signUpSlice";
import CounterSlice from "./Redux/Slices/CounterSlice";
import DashBoardSlice from "./Redux/Slices/DashBoardSlice";

const store = configureStore({
  reducer: {
    LoginForm: LoginSlice,
    SignUpForm: SignUpSlice,
    Counter: CounterSlice,
    Dashboard: DashBoardSlice,
  },
});

export default store;
