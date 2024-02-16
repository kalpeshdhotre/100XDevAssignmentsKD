import React, { useState } from "react";

const Userform = ({ onSave }) => {
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");

   const handleSave = () => {
      onSave({ name, description });
      setName("");
      setDescription("");
   };

   return (
      <div className="m-2 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <form className="flex flex-col">
            <label htmlFor="name" className="m-2  flex items-center">
               <span className="mr-2">Name: </span>
               <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="ml-auto appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:text-indigo-500" />
            </label>
            <label htmlFor="Description" className="m-2 flex items-center">
               <span className="mr-2">Description: </span>
               <input type="text" id="Description" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="ml-auto appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:text-indigo-500" />
            </label>
            {/* <label htmlFor="Interests" className="m-2 flex items-center">
               <span className="mr-2">My interests:</span>
               <input type="text" id="Interests" name="Interests" className="ml-auto appearance-none border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:text-indigo-500" />
            </label> */}
            <div className="m-3 flex justify-center">
               <button type="button" onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default Userform;
