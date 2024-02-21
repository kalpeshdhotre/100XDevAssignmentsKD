import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { para } from "../store/atoms/para";

export default function () {
   const [number, setNumber] = useState();
   //    const [paragraph, setParagraph] = useState("");
   const setPara = useSetRecoilState(para);
   const wordsArray = ["Hello", "Mountain", "Everest", "Trekking", "is", "adventurous", "dream", "must"];

   const setParagraphSize = (e) => {
      setNumber(e.target.value);
      console.log(number);
   };

   const generatePara = () => {
      let tempPara = "";
      for (let i = 1; i <= number; i++) {
         tempPara = tempPara + " " + wordsArray[Math.floor(wordsArray.length * Math.random())];
      }
      setPara(tempPara);
   };

   return (
      <div>
         <h2>Para Generator for {number} words </h2>
         <input type="number" onChange={setParagraphSize} />
         <button style={{ marginLeft: "10px" }} onClick={generatePara}>
            Generate
         </button>
         {/* <p>{para}</p> */}
      </div>
   );
}
