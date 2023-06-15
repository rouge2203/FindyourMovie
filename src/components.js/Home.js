import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

function Home() {
  const [search, setSearch] = useState("");
  //console.log("search = ", search);

  return (
    <div id="home">
      <div className="w-full h-64 rounded-md bg-cinema bg-cover bg-center flex justify-end items-center pr-5">
        <div className=" w-auto flex flex-col items-end md:mr-16 lg:mr-48">
          <h3 className=" text-2xl md:text-4xl font-extrabold  font-title mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600  ">
            Stream Center
          </h3>
          <div className="w-11/12 md:h-8 flex item-center relative">
            <input
              className="w-full rounded-xl py-0.5 pl-7 pr-2 text-sm outline-none text-slate-500"
              placeholder="Movie or TV show"
              type="search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <SlMagnifier className="absolute mt-1 ml-2 md:mt-2 text-sm text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
