import { createSlice } from "@reduxjs/toolkit";
export const DashBoardSlice = createSlice({
  name: "login_form",
  initialState: {
    dashboardName: "ShivaKumar",
    dashboardPassword: "12345",
    data:[]
  },
  reducers: {
    updateGlobalFunc: (state, action) => {
      state.data = action.payload
    },
    updatePassword: (state, action) => {
      state.dashboardPassword = "shivakumar";
    },
  },
});

export const { updateGlobalFunc, updatePassword } = DashBoardSlice.actions;

export default DashBoardSlice.reducer;
