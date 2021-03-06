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
};

export const DEFAULT_TIME = {
  pomodoro: 25,
  setPomodoro: () => {},
  short: 5,
  setShort: () => {},
  long: 15,
  setLong: () => {},
};

export const DEFAULT_TAB = {
  tab: "pomodoro",
  setTab: () => {},
};

export const Context = createContext(DEFAULT_THEME);
export const TimeContext = createContext(DEFAULT_TIME);
export const TabContext = createContext(DEFAULT_TAB);

export const useAppContext = () => useContext(Context);
export const useTimeContext = () => useContext(TimeContext);
export const useTabContext = () => useContext(TabContext);
