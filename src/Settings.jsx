import React, { useState, useEffect, useRef, useReducer } from "react";
import { createPortal } from "react-dom";

import { MdSettings } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GoCheck } from "react-icons/go";

import { Button } from "./Button";
import { useAppContext } from "./Context";

const modalRoot = document.getElementById("modal");

function reducer(options, action) {
  switch (action.type) {
    case "red":
      return Object.assign({}, options, { color: "red" });
    case "blue-light":
      return Object.assign({}, options, { color: "blue-light" });
    case "purple":
      return Object.assign({}, options, { color: "purple" });
    default:
      throw new Error();
  }
}

const Modal = ({ show, children }) => {
  const elementRef = useRef(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elementRef.current);

    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  useEffect(() => {
    if (show) {
      modalRoot.classList.remove("hidden");
      modalRoot.classList.add("absolute");
      modalRoot.classList.add("left-0");
      modalRoot.classList.add("top-0");
    } else {
      modalRoot.classList.add("hidden");
      modalRoot.classList.remove("absolute");
      modalRoot.classList.remove("left-0");
      modalRoot.classList.remove("top-0");
    }
  }, [show]);

  return createPortal(
    <div>
      {show ? (
        <div className="absolute left-1/2 top-1/2 bg-white rounded-xl w-11/12 max-w-lg transform -translate-x-1/2 -translate-y-1/2 z-20">
          {children}
        </div>
      ) : null}
    </div>,
    elementRef.current
  );
};

const Hr = ({ className }) => {
  return <hr className={`w-full border-t-2 bg-neutral-300 ${className ? className : ""}`} />;
};

const Time = () => {
  return (
    <div className="py-5">
      <h2 className="uppercase font-kumbh font-bold text-13 line-16 tracking-5">time (minutes)</h2>
    </div>
  );
};

const Font = () => {
  return (
    <div className="py-5">
      <h2 className="uppercase font-kumbh font-bold text-13 line-16 tracking-5">font</h2>
    </div>
  );
};

const Colors = ({ options, dispatch }) => {
  const Color = ({ value }) => {
    return (
      <li>
        <button
          onClick={() => dispatch({ type: value })}
          className={`bg-${value} text-lg w-40 h-40 flex justify-center items-center rounded-full focus:shadow-md hover:shadow-md`}
        >
          {options.color === value ? <GoCheck /> : ""}
        </button>
      </li>
    );
  };

  return (
    <div className="py-5 flex flex-row justify-between items-center">
      <h2 className="uppercase font-kumbh font-bold text-13 line-16 tracking-5">color</h2>
      <ul className="flex flex-row w-1/2 md:w-1/3 justify-around">
        <Color value="red" />
        <Color value="blue-light" />
        <Color value="purple" />
      </ul>
    </div>
  );
};

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { color, font, setColor, setFont } = useAppContext();

  const initialState = { color: color, font: font };

  const [options, dispatch] = useReducer(reducer, initialState);

  const Toggle = () => {
    setIsOpen(!isOpen);
    dispatch({ type: color });
  };

  const updateOptions = () => {
    setColor(options.color);
    setFont(options.font);
    Toggle();
  };

  return (
    <div className="w-full flex flex-row justify-center items-center pb-40 md:pb-70 lg:pb-30">
      <button onClick={() => Toggle()}>
        <MdSettings className="text-28" />
      </button>

      <Modal show={isOpen}>
        <article className="flex flex-col text-blue-dark">
          <header className="flex flex-row justify-between p-5">
            <h3 className="text-28 leading-35 font-bold font-kumbh">Settings</h3>
            <button className="px-3" onClick={() => Toggle()}>
              <IoMdClose className="text-14 text-blue-medium" />
            </button>
          </header>
          <Hr />
          <div className="px-5 flex flex-col">
            <Time />
            <Hr />
            <Font />
            <Hr />
            <Colors options={options} dispatch={dispatch} />
          </div>
        </article>
        <div className="flex justify-center items-center -mb-6">
          <Button onClick={() => updateOptions()}>Apply</Button>
        </div>
      </Modal>
    </div>
  );
};
