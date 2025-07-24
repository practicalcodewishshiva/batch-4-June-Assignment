import React, { useState } from "react";
import Holdings from "../Holdings/Holdings";
import LoginPage from "../LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDecrement,
  handleIncrement,
  reset,
} from "../../Redux/Slices/CounterSlice";
import DashBoard from "../DashBoard/DashBoard";
import Funds from "../Funds/Funds";
export default function Counter() {
  const count = useSelector((globalState) => globalState.Counter.count);
  console.log("counttt", count);
  const [inputValue, setInputValue] = useState("");
  // state
  const incrementValue = 20;
  const decrementValue = 30;
  const dispatch = useDispatch();

  // signal useDispatch()

  function handleInputChange(e) {
    setInputValue(e.target.value); // this will update input correctly
  }

  function Increment(event) {
    debugger
    const value = event.target.value;

    dispatch(handleIncrement(Number(inputValue)));

    console.log(inputValue, "inputValue")
    // Reset();
  }

  function Decrement() {
    dispatch(handleDecrement(decrementValue));
  }

  function Reset() {
    dispatch(reset(0));
  }
  return (
    <>
      <div>Counter {count}</div>
      <button onClick={(event)=>Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <input type="number" onChange={Increment} /> Increment value enter
      <button onClick={Reset}>Reset</button>
    </>
  );
}
