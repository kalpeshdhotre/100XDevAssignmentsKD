import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card";
import { Userform } from "./components/Userform";

function App() {
   const [count, setCount] = useState(0);

   const userInfo = {
      name: "Kalpesh K D",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo sed in. Dolorem neque amet aspernatur? Laudantium cum, eaque architecto, ipsa corrupti soluta quas blanditiis veniam quaerat unde natus voluptate!35",
   };

   // Add more objects to the array as needed

   return (
      <>
         <Userform />
         <Card userInfo={userInfo} />
         <Card userInfo={userInfo} />
      </>
   );
}

export default App;
