import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { useAppContext, COLOR_MAPPER } from "./Context";

export const Clock = () => {
  const percentage = 65;
  const time = "17:59";
  const currState = "pause";

  const { color } = useAppContext();

  return (
    <div className="rounded-full w-300 h-300 md:w-410 md:h-410 mx-auto bg-gradient-to-tl from-gradient-from to-gradient-to shadow-oval relative mb-80 md:mb-144 lg:mb-60">
      <div className="w-266 h-266 md:w-366 md:h-366 absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-blue-dark w-full h-full rounded-full">
          <CircularProgressbarWithChildren
            className={`text-${color} p-4`}
            value={percentage}
            styles={{
              path: {
                stroke: `${COLOR_MAPPER[color]}`,
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "transparent",
                strokeLinecap: "round",
                transformOrigin: "center center",
              },
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-kumbh font-bold text-80 leading-99 tracking-4m md:text-100 md:leading-124 md:tracking-5m text-neutral-100">
                {time}
              </h2>
              <h3 className="uppercase font-kumbh font-bold text-14 line-18 tracking-13 md:text-16 md:leading-20 md:tracking-15">
                {currState}
              </h3>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};
