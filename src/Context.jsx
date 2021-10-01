import { createContext, useContext } from "react";

export const COLOR_MAPPER = {
  red: "#F87070",
  "blue-light": "#70F3F8",
  purple: "#D881F8",
};

export const DEFAULT_THEME = {
  font: "font-kumbh",
  setFont: () => {},
  color: "red",
  setColor: () => {},
};

export const Context = createContext(DEFAULT_THEME);

export const useAppContext = () => useContext(Context);
