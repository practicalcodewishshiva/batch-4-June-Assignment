import React from "react";
import DashBoard from "../DashBoard/DashBoard";
import LoginPage from "../LoginPage/LoginPage";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const access_token = localStorage.getItem("access_token");
  debugger;
  if (!access_token) {
    debugger;
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoutes;
