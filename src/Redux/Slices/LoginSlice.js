import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jsonFormatWay = {
  email: "userName",
  password: "password",
};

const xmlFormatWay = `
    <root>
        <item>Value 1</item>
        <item>Value 2</item>
    </root>
    `;

export const handleLoginAuthenticationGlobally = createAsyncThunk(
  "loginForm/authentication",
  async ({ userName, password }) => {
    debugger;

    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: userName,
        password,
      }
    );
    return response.data;
  }
);

export const LoginSlice = createSlice({
  name: "login_form",
  initialState: {
    userName: "",
    password: "",
    access_token: "",
  },

  isLoading: false,
  error: null,
  responseData: [],
  reducers: {
    updateUserNameGlobally: (initialState, action) => {
      initialState.userName = action.payload;
    },
    updatePasswordGlobally: (initialState, action) => {
      initialState.password = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(handleLoginAuthenticationGlobally.pending, (globalState) => {
        globalState.isLoading = true;
        globalState.error = null;
      })
      .addCase(
        handleLoginAuthenticationGlobally.fulfilled,
        (globalState, action) => {
          globalState.isLoading = false;
          globalState.responseData = action.payload;
          globalState.access_token = action.payload.access_token;
        }
      );
  },
});

export const { updateUserNameGlobally, updatePasswordGlobally } =
  LoginSlice.actions;

export default LoginSlice.reducer;

// if(apiresponse==="pending"){
//   pendingMrhtod()
// }

// if(apiresponse==="success"){
//   successMethod()
// }

// if(apiresponse==='reject'){
//   rejectMethod()
// }

// // reducers:{
// //   normal funtions add create update delete funtionality
// // }

// if incase API CALls

// extraReducers
