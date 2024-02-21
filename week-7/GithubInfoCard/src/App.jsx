import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserInput from "./component/UserInput";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <UserInput />
      </>
   );
}

export default App;
