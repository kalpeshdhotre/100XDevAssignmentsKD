import React from "react";

export default function Profile() {
   return (
      <div className="size-24 w-96 h-96 border-red-500 bg-white rounded-xl">
         <div className="rounded-t-xl flex w-96 h-32 place-content-center bg-[url('https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
            <img className="relative top-10 h-32 w-32 object-left-top rounded-full" src="https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
         </div>

         <div className="font-bold text-2xl mt-12 name text-black">Kalpesh KD</div>
         <div className="mt-2 location text-black  font-bold">Dombivli</div>

         {/* <div className="border-solid border-black"></div> */}
         <div className="pt-4 grid content-center grid-cols-3 mt-10 footer border-t border-t-black">
            <h2 className="followers">
               <span className="text-3xl text-black font-bold">80K</span>
               <br />
               <span className="text-black font-bold">Followers</span>
            </h2>
            <h2 className="followers">
               <span className="text-3xl text-black font-bold">803K</span>
               <br />
               <span className="text-black font-bold">Likes</span>
            </h2>
            <h2 className="followers">
               <span className="text-3xl text-black font-bold">1.4K</span>
               <br />
               <span className="text-black font-bold">Photos</span>
            </h2>
         </div>
      </div>
   );
}
