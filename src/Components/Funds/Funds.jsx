import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useSelector } from "react-redux";

export default function Funds({ count }) {
  // how to get accesstoken
  const countValue = useSelector((globalState) => globalState.Counter.count);
  const { name, obj, arr } = useAuth();

  const [userData, setUserData] = useState("");
  //   GET https://api.escuelajs.co/api/v1/auth/profile
  // Authorization: Bearer {your_access_token}
  const DashBoardUserName = useSelector(
    (globalState) => globalState.Dashboard.dashboardName
  );
  async function fetchFunds() {
    const url = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `${"Bearer"} ${access_token}`,
        },
      }
    );
    const response = await url.data;
    setUserData(response);

    console.log("userData", userData);
  }


  
  return (
    <>
      <div>
        <button onClick={fetchFunds}>Get My Funds</button>
        <div>{userData.name}</div>
        <div>{userData.email}</div>
        <div>{userData.role}</div>
        <img src={userData.avatar} />
      </div>
    </>
  );
}
