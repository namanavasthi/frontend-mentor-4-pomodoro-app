import React from "react";

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded-full text-white bg-red font-kumbh font-bold text-base leading-xl ${
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
