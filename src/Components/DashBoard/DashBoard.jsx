import React, { createContext, useState } from "react";
import Holdings from "../Holdings/Holdings";
import { Link } from "react-router-dom";
import axios from "axios";
import Test from "../Test/Test";
import { useAuth } from "../AuthProvider/AuthProvider";
import Counter from "../Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { updateGlobalFunc } from "../../Redux/Slices/DashBoardSlice";

export default function DashBoard(props) {
  const userName = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const DashBoardData = useSelector(
    (globalState) => globalState.Dashboard.data
  );

  // useSelector globalState update ayinda value or state ni get cheyadaniki use chestaru
  const countValue = useSelector((globalState) => globalState.Counter.count);
  console.log("DashBoardData", DashBoardData);
  async function updateDashBoardName() {
    const url = await axios.get("https://jsonplaceholder.typicode.com/posts");

    const res = url.data;

    dispatch(updateGlobalFunc(res));
  }
  const { name, obj, arr } = useAuth();
  return (
    <>
      <button onClick={updateDashBoardName}>Update Name</button>

      {DashBoardData.map((ele) => {
        return <>{ele.title}</>;
      })}
      <Counter />
    </>
  );
}
