import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashBoard from "../DashBoard/DashBoard";
import Holdings from "../Holdings/Holdings";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePasswordGlobally,
  updateUserNameGlobally,
} from "../../Redux/Slices/LoginSlice";

function LoginPage({ count }) {
  const navigate = useNavigate();

  // useSelector

  const { userName, password } = useSelector(
    (globalState) => globalState.LoginForm
  );

  console.log(userName, password, "globalState");

  const dispatch = useDispatch();
  function handleUserName(event) {
    dispatch(updateUserNameGlobally(event.target.value));
  }

  function handlePassword(event) {
    dispatch(updatePasswordGlobally(event.target.value));
  }

  async function handleLogin() {
    try {
      const url = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",

        {
          email: userName,
          password: password,
        }
      );

      const Response = await url.data.access_token;
      // key     value

      if (userName === "shiva" && password === "12345") {
        localStorage.setItem("access_token", Response);
        localStorage.setItem("userName", "shivaasdasdasds");
        navigate("/dashboard");
      } else {
        alert("Invalid username or password.");
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div className="container">
        <div className="flex-container">
          <h1> Login to Kite</h1>

          <div style={{ color: "green" }}>{count}</div>

          <label> Phone or User ID</label>
          <input type="text" onChange={handleUserName} />
          <label>Password</label>
          <input type="password" onChange={handlePassword} />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

// reduxSlice ------> LoginFormSlice ------->

// LoginFormSlice.jsx
// const initialState = {
//     userName:"",
//     password:""
//   }

// function LoginFormSlice(){
//   reducer : {
//     setUpdateUserName : (initialState, action) =>{
// initialState.userName = "new name added",
// initialState.password = 123234345
//     }
//   }

//   export setUpdateUserName
// }
