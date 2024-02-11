import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInfo, faUser } from "@fortawesome/free-solid-svg-icons";

export function Card({ userInfo }) {
   return (
      <div className="m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <FontAwesomeIcon icon={faUser} />
         <a href="#">
            <h5 className="mb-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userInfo.name}</h5>
         </a>
         <FontAwesomeIcon icon={faInfo} />
         <p className="mb-3 font-normal text-blue--300 dark:text-blue-400">{userInfo.description}</p>
         <a href="https://www.facebook.com/kalpeshdhotre">
            <FontAwesomeIcon className="m-4 text-white" icon={faFacebook} />
         </a>
         <a href="https://www.facebook.com/kalpeshdhotre">
            <FontAwesomeIcon className="m-4 text-white" icon={faLinkedinIn} />
         </a>
         <a href="https://www.facebook.com/kalpeshdhotre">
            <FontAwesomeIcon className="m-4 text-white" icon={faXTwitter} />
         </a>
         <a href="https://www.facebook.com/kalpeshdhotre">
            <FontAwesomeIcon className="m-4 text-white" icon={faWhatsapp} />
         </a>
         <p className="border-cyan-400 mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat facilis dolor quas nam iusto laudantium!</p>
      </div>
   );
}
