import React, { useEffect, useReducer, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { COLOR_MAPPER, useAppContext, useTabContext, useTimeContext } from "./Context";

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

function timeReducer(time, action) {
  switch (action.type) {
    case "pomodoro":
      return Object.assign({}, time, { pomodoro: time.pomodoro - 1 });
    case "short":
      return Object.assign({}, time, { short: time.short - 1 });
    case "long":
      return Object.assign({}, time, { long: time.long - 1 });
    case "reset-pomodoro":
      return Object.assign({}, time, { pomodoro: action.value });
    case "reset-short":
      return Object.assign({}, time, { short: action.value });
    case "reset-long":
      return Object.assign({}, time, { long: action.value });
    case "new-time":
      return Object.assign({}, action.value);
    default:
      throw new Error();
  }
}

export const Clock = () => {
  const { color, font } = useAppContext();
  const { pomodoro, short, long } = useTimeContext();
  const { tab } = useTabContext(); // get current active tab

  const initialTimeState = {
    pomodoro: toSeconds(pomodoro),
    short: toSeconds(short),
    long: toSeconds(long),
  };

  const [time, timeDispatcher] = useReducer(timeReducer, initialTimeState);
  const [clockState, setClockState] = useState("paused");

  useEffect(() => {
    let timer;
    if (clockState === "running") {
      timer = setTimeout(() => timeDispatcher({ type: tab }), 1000);
      if (time[tab] === 0) {
        setClockState("reset");
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [clockState, time, tab]);

  useEffect(() => {
    setClockState("paused");
  }, [tab]);

  useEffect(() => {
    timeDispatcher({
      type: "new-time",
      value: { pomodoro: toSeconds(pomodoro), short: toSeconds(short), long: toSeconds(long) },
    });
  }, [pomodoro, short, long]);

  const calcPercentageTimePassed = (initial, current) => {
    return Math.floor(((initial - current) * 100) / initial);
  };

  return (
    <div className="rounded-full w-300 h-300 md:w-410 md:h-410 mx-auto bg-gradient-to-tl from-gradient-from to-gradient-to shadow-oval relative mb-80 md:mb-144 lg:mb-60">
      <div className="w-266 h-266 md:w-366 md:h-366 absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-blue-dark w-full h-full rounded-full">
          <button
            className="w-full h-full rounded-full"
            onClick={() => {
              if (clockState === "reset") {
                timeDispatcher({ type: `reset-${tab}`, value: initialTimeState[tab] });
                setClockState("paused");
              } else {
                setClockState(clockState === "running" ? "paused" : "running");
              }
            }}
          >
            <CircularProgressbarWithChildren
              className={`text-${color} p-4`}
              value={calcPercentageTimePassed(initialTimeState[tab], time[tab])}
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
                  className={`uppercase font-${font} font-bold text-14 line-18 tracking-13 md:text-16 md:leading-20 md:tracking-15 pt-5`}
                >
                  {clockState === "paused" ? "start" : clockState === "reset" ? "reset" : "pause"}
                </h3>
              </div>
            </CircularProgressbarWithChildren>
          </button>
        </div>
      </div>
    </div>
  );
};
