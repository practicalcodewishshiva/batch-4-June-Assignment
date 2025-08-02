import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Positions from "./Components/Positions/Positions";
import Bids from "./Components/Bids/Bids";
import Funds from "./Components/Funds/Funds";
import Holdings from "./Components/Holdings/Holdings";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import { AuthProvider } from "./Components/AuthProvider/AuthProvider";
import Counter from "./Components/Counter/Counter";
import { LineChart } from "./Components/Charts/LineChart";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  function handleLogoutlogOut() {
  
    localStorage.removeItem("access_token");
  }

  return (
    <>
      {location.pathname === "/" ? null : (
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              listStyle: "none",
            }}
          >
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            <li>
              <Link to="/funds">Orders</Link>
            </li>
            <li>
              <Link to="/holdings">Holdings</Link>
            </li>
            <li>
              <Link to="/positions">Positions</Link>
            </li>
            <li>
              <Link to="/bids">Bids</Link>
            </li>
            <li>
              <Link to="/funds">Funds</Link>
            </li>

            <li onClick={handleLogoutlogOut}> Log Out </li>
          </ul>
        </div>
      )}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LineChart />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/holdings"
            element={
              <ProtectedRoutes>
                <Holdings />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/positions"
            element={
              <ProtectedRoutes>
                <Positions />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoutes>
                <Bids />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/funds"
            element={
              <ProtectedRoutes>
                <Funds />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;




// Login Component


// username.    shiva

// password.    kumar


// LoginSlice 

// global data Login componnet 

// Singup Component


// SignupSlice

// singup data ikkada create 
