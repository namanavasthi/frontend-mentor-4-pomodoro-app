import { createContext, useContext } from "react";

export const STEP = 1;

export const COLOR_MAPPER = {
  red: "#F87070",
  "blue-light": "#70F3F8",
  purple: "#D881F8",
};

export const DEFAULT_THEME = {
  font: "kumbh",
  setFont: () => {},
  color: "red",
  setColor: () => {},
  time: {
    pomodoro: 25,
    short: 5,
    long: 15,
  },
  setTime: () => {},
};

export const DEFAULT_TIME = {
  pomodoro: 25,
  setPomodoro: () => {},
  short: 5,
  setShort: () => {},
  long: 15,
  setLong: () => {},
};

export const Context = createContext(DEFAULT_THEME);
export const TimeContext = createContext(DEFAULT_TIME);

export const useAppContext = () => useContext(Context);
export const useTimeContext = () => useContext(TimeContext);
