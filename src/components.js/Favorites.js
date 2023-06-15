import React, { useRef, useEffect } from "react";
import Recomendation from "./RecomendationCard.js";
import { favorites } from "../constants/favorites.js";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Favorites() {
  const ref = useRef(null);
  const intervalRef = useRef();

  const startScroll = () => {
    intervalRef.current = setInterval(() => {
      if (ref.current) {
        ref.current.scrollLeft += 100;
      }
    }, 75); // Scroll by 20px every 100ms
  };

  const startScrollL = () => {
    intervalRef.current = setInterval(() => {
      if (ref.current) {
        ref.current.scrollLeft += -100;
      }
    }, 75); // Scroll by 20px every 100ms
  };

  const stopScroll = () => {
    clearInterval(intervalRef.current);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="" id="favorites">
      <div className="w-full h-64  flex flex-col mb-5  mt-4">
        <div className="bg-slate-100 shadow-md h-full self-center flex flex-col w-11/12 md:w-3/4 sm:relative justify-center ">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 mt-2 text-center self-center p-1 rounded-lg flex items-center w-fit">
            <p className="text-white font-light self-center  text-sm p-1">
              Favorites
            </p>
          </div>
          <div
            id="scrollLeft"
            onMouseDown={startScrollL}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            className=" group hidden sm:flex h-6 w-6 justify-center absolute p-.05 bg-slate-200 items-center bg-opacity-60 rounded-full hover:h-8 hover:w-8 hover:p-0 hover:cursor-pointer "
          >
            <AiFillCaretLeft className="text-purple-600 text-md group-hover:text-xl" />
          </div>
          <div
            ref={ref}
            className=" p-3 pt-2 pb-6 pr-0 h-full flex  overflow-x-scroll scroll-smooth sm:scrollbar-none  "
          >
            {favorites.map((item) => (
              <Recomendation movie={item.movie} streaming={item.streaming} />
            ))}
          </div>
          <div
            id="scrollRight"
            onMouseDown={startScroll}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            className=" group hidden sm:flex h-6 w-6 justify-center absolute p-.05 bg-slate-200 items-center bg-opacity-60 rounded-full hover:h-8 hover:w-8 hover:p-0 hover:cursor-pointer end-0 "
          >
            <AiFillCaretRight className="text-purple-600 text-md group-hover:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
