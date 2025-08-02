import React from "react";
import Cards from "../Cards/Cards";

export default function ProductList() {
  const productList = [
    {
      productName: "Nautika",
      price: 854,
    },
    {
      productName: "Kook",
      price: 299,
    },
    {
      productName: "MetroNaut",
      price: 699,
    },
     {
      productName: "Shiva",
      price: 299,
    },
    {
      productName: "Naresh",
      price: 699,
    },
  ];

  return (
    <>
      <div>ProductList</div> 

      <Cards productList={productList}/>
    </>
  );
}
