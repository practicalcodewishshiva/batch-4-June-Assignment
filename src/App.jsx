import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from "./Components/SignUpPage/SignUpPage";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>

   <LoginPage/>
    
   <SignUpPage/>
     
      {/* Dashbaord
      <div>Hi, Siva</div>
      equity 50.4 Margin available Margins used 0 Opening balance 450.4 Console
      logo View statement commodity 0 Margin available Margins used 0 Opening
      balance 0 Console logo View statement Holdings (26) 35.31k +8.90% P&L
      Current value 4.32L Investment 3.97L ₹4,32,164.50 Current valueInvestment
      valueP&L

       Market overview
Jul 24
Oct 24
Jan 25
Apr 25
22497.9    11 Mar 2025
NIFTY 50 */}

    </>
  );
}

export default App;
// babel.

//  {
//         type:"div",

//       },{
//         type:"div",
//         props:"flex-container",
//         children:[{type:"input"}]
//       }





// function order(){
//   return (

//     Hi, Siva
//  equity
// 450.4
// Margin available
// Margins used 0
// Opening balance 450.4
// Console logo View statement
//  commodity
// 0
// Margin available
// Margins used 0
// Opening balance 0
// Console logo View statement
//  Holdings (26)
// 35.31k +8.90%
// P&L
// Current value 4.32L
// Investment 3.97L
// ₹4,32,164.50
// Current valueInvestment valueP&L

//   )
// }