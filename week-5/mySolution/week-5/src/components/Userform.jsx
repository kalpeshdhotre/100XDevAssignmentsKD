import React from "react";

export function Userform() {
   return (
      <div className="m-2 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <form className="flex flex-col items-start">
            <label htmlFor="name" className="decoration-black">
               Name:
               <input type="text" id="name" name="name" className="m-4 ml-2 appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:text-indigo-500" />
            </label>
            <label htmlFor="text" className="">
               Description:
               <input type="text" id="email" name="email" className="m-4 ml-2 appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:text-indigo-500" />
            </label>
            <label htmlFor="Interests" className="">
               My interests:
               <input type="text" id="Interests" name="Interests" className="m-4 ml-2 appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:text-indigo-500" />
            </label>
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Submit</button>
         </form>
      </div>
   );
}

//  <form>
//     <label htmlFor="name">Name:</label>
//     <input type="text" id="name" name="name" />
//     <label htmlFor="email">Description:</label>
//     <input type="email" id="email" name="email" />
//     <label htmlFor="password">My interests:</label>
//     <input type="text" id="Interests" name="Interests" />
//     <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Submit</button>
//  </form>
//   </div>
//    );
// }
