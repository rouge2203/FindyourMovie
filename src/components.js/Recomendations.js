import React, { useRef, useEffect } from "react";
import Recomendation from "./RecomendationCard.js";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Recomendations() {
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
    <div className="" id="recomendations">
      <div className="w-full h-64  flex flex-col mb-5  mt-4">
        <div className="bg-slate-100 shadow-md h-full self-center flex flex-col w-11/12 md:w-3/4 sm:relative justify-center ">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 mt-2 text-center self-center p-1 rounded-lg flex items-center w-fit">
            <p className="text-white font-light self-center  text-sm p-1">
              Popular
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
            <Recomendation
              movie="https://i.pinimg.com/564x/dd/b7/16/ddb7167493cb1e5cf38d708bf8705fda.jpg"
              streaming={"netflix"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/fe/e7/ea/fee7eab62f787cf7bbd3aa3cce3ac833.jpg"
              streaming={"prime"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/8d/1d/e2/8d1de298658c866b93718298b6a525ea.jpg"
              streaming={"hulu"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/f7/25/fa/f725fa9666b89729d8ee8a6f51a1ccf0.jpg"
              streaming={"hbo"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/43/e4/d6/43e4d619dc44b1a2fd5b2a35cfc4fdf2.jpg"
              streaming={"appletv"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/fe/30/14/fe3014b2ee912af5e48a55fac4accd7a.jpg"
              streaming={"rakutentv"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/c7/d5/28/c7d528ffd81ad5abcd4763400b09d9d9.jpg"
              streaming={"crunchyroll"}
            />
            <Recomendation
              movie="https://i.pinimg.com/564x/7a/90/de/7a90de9d8398afeb256242cb96df1627.jpg"
              streaming={"disneyplus"}
            />
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

export default Recomendations;
