import React, { useEffect, useReducer } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { useAppContext, COLOR_MAPPER, useTabContext, useTimeContext } from "./Context";

function timeReducer(time, action) {
  switch (action.type) {
    case "pomodoro":
      return Object.assign({}, time, { pomodoro: time.pomodoro - 1 });
    case "short":
      return Object.assign({}, time, { short: time.short - 1 });
    case "long":
      return Object.assign({}, time, { long: time.long - 1 });
    default:
      throw new Error();
  }
}

function toSeconds(min) {
  return min * 60;
}

function secondsToClockString(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;

  return `${minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
}

export const Clock = () => {
  const percentage = 65;
  // const time = "17:59";
  const currState = "pause";

  const { color, font } = useAppContext();
  const { pomodoro, short, long } = useTimeContext();
  const { tab } = useTabContext(); // get current active tab

  const initialTimeState = {
    pomodoro: toSeconds(pomodoro),
    short: toSeconds(short),
    long: toSeconds(long),
  };

  // const [time, setTime] = useState(0);

  const [time, timeDispatcher] = useReducer(timeReducer, initialTimeState);

  // useEffect(() => {
  //   switch (tab) {
  //     case "pomodoro":
  //       setTime(pomodoro);
  //       break;
  //     case "short":
  //       setTime(short);
  //       break;
  //     case "long":
  //       setTime(long);
  //       break;
  //     default:
  //       break;
  //   }
  // }, [tab]);

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
              <h2
                className={`font-${font} font-bold text-80 leading-99 tracking-4m md:text-100 md:leading-124 md:tracking-5m text-neutral-100`}
              >
                {secondsToClockString(time[tab])}
              </h2>
              <h3
                className={`uppercase font-${font} font-bold text-14 line-18 tracking-13 md:text-16 md:leading-20 md:tracking-15`}
              >
                {currState}
              </h3>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};
