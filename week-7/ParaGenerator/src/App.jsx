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
