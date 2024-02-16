import { set } from "mongoose";
import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
   const setHere = useRef(null);

   //    This is to set focus on component load - this will run once since there is no dependency
   useEffect(() => {
      setHere.current.focus();
   }, []);

   //    this is to set focus when button is clicked
   const handleButtonClick = () => {
      setHere.current.focus();
   };

   return (
      <div>
         <input type="text" placeholder="Enter text here" ref={setHere} />
         <button onClick={handleButtonClick}>Focus Input</button>
      </div>
   );
}
