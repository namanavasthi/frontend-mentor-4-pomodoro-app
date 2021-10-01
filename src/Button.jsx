import React from "react";

import { useAppContext } from "./Context";

const TabButton = (props) => {
  const { color, font } = useAppContext();

  const { children, className, onClick, active = false } = props;
  return (
    <button
      className={`rounded-full  ${
        active ? `bg-${color} text-blue-medium` : "bg-transparent text-neutral-100 text-opacity-40"
      } font-${font} font-bold text-12 leading-15 md:text-14 md:leading-18 leading-xl ${className ? className : ""}`}
      onClick={() => onClick()}
    >
      <span className="rounded-full h-full block w-full py-2.5 px-3 md:py-3.5 md:px-11 hover:bg-white hover:bg-opacity-20">
        {children}
      </span>
    </button>
  );
};

const DefaultButton = (props) => {
  const { color, font } = useAppContext();
  const { children, className, onClick } = props;
  return (
    <button
      className={`rounded-full text-white bg-${color} font-${font} font-bold text-base leading-xl ${
        className ? className : ""
      }`}
      onClick={() => onClick()}
    >
      <span className="rounded-full h-full block w-full py-3.5 px-11 hover:bg-white hover:bg-opacity-20">
        {children}
      </span>
    </button>
  );
};

export const Button = (props) => {
  const { type = "" } = props;

  if (type === "tabs") return <TabButton {...props} />;
  else return <DefaultButton {...props} />;
};
