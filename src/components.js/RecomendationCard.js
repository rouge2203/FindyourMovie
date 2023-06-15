import React from "react";
import {
  SiNetflix,
  SiPrime,
  SiHulu,
  SiHbo,
  SiAppletv,
  SiRakuten,
  SiCrunchyroll,
} from "react-icons/si";
import { SlQuestion } from "react-icons/sl";
import { TbBrandDisney } from "react-icons/tb";

function RecomendationCard({ movie, streaming }) {
  return (
    <div id="recomendation">
      <div className="h-full w-32 mr-3 rounded-sm flex flex-col overflow-x-hidden">
        <div
          className="h-full w-full bg-cover flex"
          style={{ backgroundImage: `url(${movie})` }}
        >
          <div
            className="flex h-8 w-8 ml-0.5 bg-white mt-0.5 
           items-center justify-center p-1 rounded-md  "
          >
            {streaming === "netflix" ? (
              <SiNetflix className="text-purple-600" />
            ) : streaming === "prime" ? (
              <SiPrime className="text-purple-600" />
            ) : streaming === "hulu" ? (
              <SiHulu className="text-purple-600" />
            ) : streaming === "hbo" ? (
              <SiHbo className="text-purple-600" />
            ) : streaming === "appletv" ? (
              <SiAppletv className="text-purple-600" />
            ) : streaming === "rakutentv" ? (
              <SiRakuten className="text-purple-600" />
            ) : streaming === "crunchyroll" ? (
              <SiCrunchyroll className="text-purple-600" />
            ) : streaming === "disneyplus" ? (
              <TbBrandDisney className="text-purple-600" />
            ) : (
              <SlQuestion className="text-purple-600" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecomendationCard;
