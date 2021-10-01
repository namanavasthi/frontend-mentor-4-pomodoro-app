import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { MdSettings } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GoCheck } from "react-icons/go";

import { useAppContext } from "./Context";

const modalRoot = document.getElementById("modal");

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

const Colors = () => {
  const { color, setColor } = useAppContext();

  return (
    <div className="py-5 flex flex-row justify-between items-center">
      <h2 className="uppercase font-kumbh font-bold text-13 line-16 tracking-5">color</h2>
      <ul className="flex flex-row w-1/2 md:w-1/3 justify-around">
        <li>
          <button
            onClick={() => setColor("red")}
            className="bg-red text-lg w-40 h-40 flex justify-center items-center rounded-full"
          >
            {color === "red" ? <GoCheck /> : ""}
          </button>
        </li>
        <li>
          <button
            onClick={() => setColor("blue-light")}
            className="bg-blue-light text-lg w-40 h-40 flex justify-center items-center rounded-full"
          >
            {color === "blue-light" ? <GoCheck /> : ""}
          </button>
        </li>
        <li>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple text-lg w-40 h-40 flex justify-center items-center rounded-full"
          >
            {color === "purple" ? <GoCheck /> : ""}
          </button>
        </li>
      </ul>
    </div>
  );
};

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => setIsOpen(!isOpen);

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
            <Colors />
          </div>
        </article>
      </Modal>
    </div>
  );
};
