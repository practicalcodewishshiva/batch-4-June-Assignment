import React, { createContext, useState } from "react";
import Holdings from "../Holdings/Holdings";
import { Link } from "react-router-dom";
import axios from "axios";
import Test from "../Test/Test";
import { useAuth } from "../AuthProvider/AuthProvider";
import Counter from "../Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { updateGlobalFunc } from "../../Redux/Slices/DashBoardSlice";
import CustomLineChart from "../Charts/CustomLineChart";

export default function DashBoard(props) {
  return (
    <>
      <CustomLineChart />
    </>
  );
}
