import { useEffect, useState } from "react";
import axios from "axios";

export default function UserInput() {
   const [gitProfile, setGitProfile] = useState();
   const [userName, setUserName] = useState("");

   async function getProfileData(userName) {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setGitProfile(response.data);
   }

   useEffect(() => {
      console.log(gitProfile);
   }, [gitProfile]);

   return (
      <>
         <div>
            <input onChange={(event) => setUserName(event.target.value)} value={userName} type="text" style={{ marginRight: "5px" }} />
            <button onClick={() => getProfileData(userName)}>Submit</button>
            <button onClick={() => console.log(gitProfile)}>Print</button>
            {/* <button onClick={() => console.log(userName)}>Submit</button> */}
         </div>
         <div>
            <img src={gitProfile.avatar_url} alt="" />
            <h1>{gitProfile.login}</h1>
            <h1>{gitProfile.name}</h1>
            <h1>{gitProfile.location}</h1>
            <h1>{gitProfile.followers}</h1>
            <h1>{gitProfile.bio}</h1>
         </div>
      </>
   );
}
