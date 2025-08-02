import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashBoard from "../DashBoard/DashBoard";
import Holdings from "../Holdings/Holdings";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLoginAuthenticationGlobally,
  updatePasswordGlobally,
  updateUserNameGlobally,
} from "../../Redux/Slices/LoginSlice";

function LoginPage({ count }) {
  const navigate = useNavigate();

  // useSelector

  const { userName, password, isLoading, access_token } = useSelector(
    (globalState) => globalState.LoginForm
  );

  console.log(userName, password, "isLoading", isLoading);

  const dispatch = useDispatch();
  function handleUserName(event) {
    dispatch(updateUserNameGlobally(event.target.value));
  }

  function handlePassword(event) {
    dispatch(updatePasswordGlobally(event.target.value));
  }

  async function handleLogin() {
    try {
      dispatch(handleLoginAuthenticationGlobally({ userName, password }));
      debugger;
      if (userName === "john@mail.com" && password === "changeme") {
        localStorage.setItem("access_token", access_token);
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
          {isLoading ? <div className="loader"></div> : null}
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

// localStoraga authtoken store chestunam

// global Store authtoken oka issue
// refresh authtoken delete
