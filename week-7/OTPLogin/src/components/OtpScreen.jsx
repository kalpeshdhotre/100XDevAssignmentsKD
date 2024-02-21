import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function OtpScreen({ otp, setOtp }) {
   const navigate = useNavigate();
   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);
   const inputRef3 = useRef(null);
   const inputRef4 = useRef(null);
   const submitRef = useRef(null);
   let enteredOtp = "";

   // inputRef1.current.focus();

   function getEnteredOtp(e) {
      enteredOtp = enteredOtp + e.target.value;
      console.log(enteredOtp);
   }

   function verifyOtp() {
      if (otp == parseInt(enteredOtp)) {
         setOtp("verified");
         console.log("verified");
      }
   }

   useEffect(() => {
      // if (inputRef1.current) {
      inputRef1.current.focus();
      // }
   }, []);

   return (
      <div>
         <h1>Otp is {otp}</h1>
         <input
            onChange={(e) => getEnteredOtp(e)}
            ref={inputRef1}
            onInput={() => {
               inputRef2.current.focus();
            }}
            size={"5"}
            maxLength={"1"}
            type="text"
         />
         <input
            onChange={(e) => getEnteredOtp(e)}
            ref={inputRef2}
            onInput={() => {
               inputRef3.current.focus();
            }}
            size={"5"}
            maxLength={"1"}
            type="text"
         />
         <input
            onChange={(e) => getEnteredOtp(e)}
            ref={inputRef3}
            onInput={() => {
               inputRef4.current.focus();
            }}
            size={"5"}
            maxLength={"1"}
            type="text"
         />
         <input
            onChange={(e) => getEnteredOtp(e)}
            ref={inputRef4}
            onInput={() => {
               submitRef.current.focus();
            }}
            size={"5"}
            maxLength={"1"}
            type="text"
         />

         <br />
         <button onClick={verifyOtp} ref={submitRef}>
            Submit
         </button>
         <button
            onClick={() => {
               navigate("/");
               setOtp("");
            }}
         >
            Back
         </button>
      </div>
   );
}
