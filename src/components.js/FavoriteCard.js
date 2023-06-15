import React from "react";
import { SiNetflix, SiPrime } from "react-icons/si";

const FavoriteCard = ({ movie, streaming }) => {
  return (
    <div id="favorite">
      <div className="h-full w-32 mr-3 bg-red-500 rounded-sm flex flex-col overflow-x-hidden">
        <div
          className="h-full w-full bg-cover flex"
          style={{ backgroundImage: `url(${movie})` }}
        >
          <div className="flex h-8 w-8 ml-0.5 bg-white mt-0.5 items-center justify-center p-1 rounded-md  ">
            {streaming === "netflix" ? (
              <SiNetflix className="text-purple-600" />
            ) : streaming === "prime" ? (
              <SiPrime className="text-purple-600" />
            ) : (
              <p>hola</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
