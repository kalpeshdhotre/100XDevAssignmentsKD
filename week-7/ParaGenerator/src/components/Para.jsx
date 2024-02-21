import { useRecoilValue } from "recoil";
import { para } from "../store/atoms/para";

export default function Para() {
   const paragraph = useRecoilValue(para);
   return (
      <div>
         <p>{paragraph}</p>
      </div>
   );
}
