import { useNavigate } from "react-router-dom";

export default function Login({ setOtp }) {
   const navigate = useNavigate();

   function processOtp() {
      navigate("/OtpScreen");

      setOtp(Math.floor(Math.random() * 10000));
   }

   return (
      <>
         <h1>Enter your mobile number to recive OTP</h1>
         <input type="text" />
         <br />
         <button onClick={processOtp}>Send OTP</button>
      </>
   );
}
