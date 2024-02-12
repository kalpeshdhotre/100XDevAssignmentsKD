import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Userform from "./components/Userform";

const App = () => {
   // const [count, setCount] = useState(0);
   const [userInfo, setUserInfo] = useState([]);

   const handleSaveUserInfo = (newUserInfo) => {
      setUserInfo([...userInfo, newUserInfo]);
   };

   // const userInfo = {
   //    name: "Kalpesh K D",
   //    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo sed in. Dolorem neque amet aspernatur? Laudantium cum, eaque architecto, ipsa corrupti soluta quas blanditiis veniam quaerat unde natus voluptate!35",
   // };

   return (
      <div>
         <Userform onSave={handleSaveUserInfo} />
         {userInfo.map((userinfo, index) => (
            <Card key={index} name={userinfo.name} description={userinfo.description} />
         ))}

         {/* <Userform /> */}
         {/* <Card userInfo={userInfo} /> */}
         {/* <Card userInfo={userInfo} /> */}
      </div>
   );
};

export default App;
