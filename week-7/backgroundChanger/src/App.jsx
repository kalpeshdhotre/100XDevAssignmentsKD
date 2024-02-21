import React from "react";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { customColor } from "./store/atoms/color";

function App() {
   // const [color, setColor] = useState("");
   // const color = useRecoilValue(customColor);

   return (
      <>
         <RecoilRoot>
            <Buttons />
         </RecoilRoot>
      </>
   );
}

function Buttons() {
   const [color, setColor] = useRecoilState(customColor);
   // const color = useRecoilValue(customColor);
   // const setColor = useRecoilState(customColor);
   console.log("re-rendered");
   useEffect(() => {
      document.body.style.background = color;
   }, [color]);
   return (
      <div>
         <button
            onClick={() => {
               setColor("red");
            }}
            style={{ backgroundColor: "red", margin: "5px" }}
         >
            Red
         </button>
         <button
            onClick={() => {
               setColor("yellow");
            }}
            style={{ backgroundColor: "yellow", margin: "5px" }}
         >
            Yellow
         </button>
         <button
            onClick={() => {
               setColor("black");
            }}
            style={{ backgroundColor: "black", color: "white", margin: "5px" }}
         >
            Black
         </button>
         <button
            onClick={() => {
               setColor("purple");
            }}
            style={{ backgroundColor: "purple", color: "white", margin: "5px" }}
         >
            Purple
         </button>
         <button
            onClick={() => {
               setColor("green");
            }}
            style={{ backgroundColor: "green", color: "white", margin: "5px" }}
         >
            Green
         </button>
         <button
            onClick={() => {
               setColor("blue");
            }}
            style={{ backgroundColor: "blue", color: "white", margin: "5px" }}
         >
            Blue
         </button>
         <button
            onClick={() => {
               setColor("");
            }}
            style={{ backgroundColor: "", margin: "5px" }}
         >
            Default
         </button>
      </div>
   );
}
export default App;
