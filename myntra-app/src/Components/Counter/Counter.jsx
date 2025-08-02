import React, { useState } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  deleteproduct,
  resetProduct,
} from "../../Redux/features/counter/counterSlice";
import { useNavigate } from "react-router-dom";

export default function Counter() {
  const [count, updateCount] = useState(0);

  const countValue = useSelector((globalState) => globalState.counter.count);
  const navigate = useNavigate();

  console.log("countValue", countValue);

  // reducer signan useDispatch

  const value = 1;

  const dispatch = useDispatch();

  function increment(valueReceivedFromButtons) {
    dispatch(addNewProduct(valueReceivedFromButtons));
  }

  function decrement() {
    dispatch(deleteproduct(value));
  }

  function reset() {
    dispatch(resetProduct());
  }

  function goToBag() {
    navigate("/cart");
  }

  function wishList() {
    // navigate to cart page
    // https://www.myntra.com/checkout/cart
    navigate("https://www.myntra.com/checkout/cart");
  }
  return (
    <>
      Counter app {countValue}
      <button onClick={increment}>Added new product</button>
      <button onClick={decrement}>Delete Product</button>
      <button onClick={reset}>Reset</button>
      <div style={{ display: "flex", gap: "22px", marginTop: "20px" }}>
        SELECT SIZE (UK Size)Size Chart
        <button onClick={() => increment(6)} className="productAdd">
          6
        </button>
        <button onClick={() => increment(7)} className="productAdd">
          7
        </button>
        <button onClick={() => increment(8)} className="productAdd">
          8
        </button>
        <button onClick={() => increment(9)} className="productAdd">
          9
        </button>
        <button onClick={() => increment(10)} className="productAdd">
          10
        </button>
      </div>
      <button onClick={goToBag}>GO TO BAG</button>
      <button onClick={wishList}>WISHLIST</button>
    </>
  );
}
