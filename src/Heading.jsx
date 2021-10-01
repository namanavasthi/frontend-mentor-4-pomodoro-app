import React from "react";
import { useAppContext } from "./Context";

export const Heading = () => {
  const { font } = useAppContext();

  return (
    <header>
      <h1
        className={`text-24 line-30 font-${font} font-bold p-30 pb-40 md:text-32 md:leading-40 md:p-80 md:pb-30 lg:p-50 lg:pb-50`}
      >
        pomodoro
      </h1>
    </header>
  );
};
