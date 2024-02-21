import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import OtpScreen from "./components/OtpScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OtpDisplay from "./components/OtpDisplay";

function App() {
   const [otp, setOtp] = useState(0);

   return (
      <>
         <BrowserRouter>
            {/* <OtpDisplay otp={otp} /> */}
            <Routes>
               <Route path="/" element={<Login setOtp={setOtp} />} />
               <Route path="/otpscreen" element={<OtpScreen otp={otp} setOtp={setOtp} />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
