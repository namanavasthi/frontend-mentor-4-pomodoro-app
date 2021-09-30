import React from "react";

export const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full md:max-w-screen-md lg:max-w-screen-xl mx-auto ${className ? className : ""}`}>
      {children}
    </div>
  );
};
