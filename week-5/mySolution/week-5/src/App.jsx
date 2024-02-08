import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card";

function App() {
   const [count, setCount] = useState(0);

   //  const userInfo = {
   //     name: "Kalpesh",
   //     description: "Loves Trekking",
   //  };
   const userInfo = [
      {
         name: "Kalpesh",
         description: "Loves Trekking",
      },
      {
         name: "John",
         description: "Enjoys Coding",
      },
      // Add more objects to the array as needed
   ];

   return (
      <>
         {userInfo.map((user, index) => (
            <Card key={index} userInfo={user} />
         ))}
      </>
   );
   //  return (
   //     <>
   //        <Card userInfo={userInfo} />
   //     </>
   //  );
}

export default App;
