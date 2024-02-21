import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserInput from "./components/UserInput";
import Para from "./components/Para";
import { RecoilRoot } from "recoil";

function App() {
   //  const [count, setCount] = useState(0);

   return (
      <>
         <RecoilRoot>
            <UserInput />
            <Para />
         </RecoilRoot>
      </>
   );
}

export default App;
