import React, { useState, useEffect, useRef, useReducer } from "react";
import { createPortal } from "react-dom";

import { MdSettings } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { CgChevronUp } from "react-icons/cg";

import { Button } from "./Button";
import { useAppContext, STEP, useTimeContext } from "./Context";

const modalRoot = document.getElementById("modal");

function themeReducer(theme, action) {
  switch (action.type) {
    case "red":
      return Object.assign({}, theme, { color: "red" });
    case "blue-light":
      return Object.assign({}, theme, { color: "blue-light" });
    case "purple":
      return Object.assign({}, theme, { color: "purple" });
    case "kumbh":
      return Object.assign({}, theme, { font: "kumbh" });
    case "roboto":
      return Object.assign({}, theme, { font: "roboto" });
    case "space":
      return Object.assign({}, theme, { font: "space" });
    default:
      throw new Error();
  }
}

function timeReducer(time, action) {
  switch (action.type) {
    case "pomodoro":
      return Object.assign({}, time, {
        pomodoro: action.value,
        short: time.short,
        long: time.long,
      });

    case "short":
      return Object.assign({}, time, {
        pomodoro: time.pomodoro,
        short: action.value,
        long: time.long,
      });

    case "long":
      return Object.assign({}, time, {
        pomodoro: time.pomodoro,
        short: time.short,
        long: action.value,
      });

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

const Times = ({ time, timeDispatch, font }) => {
  // tailwind is kinda 💩 with input form styling
  // so intead of binding things to an input number change
  // id use basic html instead

  const Time = ({ value, className }) => {
    return (
      <li className={`flex flex-row items-center md:flex-col w-full py-1 md:py-3 ${className ? className : ""}`}>
        <span
          className={`lowercase pb-2 text-12 leading-15 font-${font} font-bold text-blue-medium text-opacity-40 w-1/2 md:w-full`}
        >
          {value}
        </span>

        <div className="flex justify-between items-center rounded-lg bg-neutral-200 p-2 w-1/2 md:w-full">
          <span>{time[value]}</span>
          <div className="flex flex-col">
            <button onClick={() => timeDispatch({ type: value, value: time[value] + STEP })}>
              <CgChevronUp />
            </button>
            <button onClick={() => timeDispatch({ type: value, value: time[value] - STEP })}>
              <CgChevronUp className="transform rotate-180" />
            </button>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="py-5 flex flex-col justify-between items-center">
      <h2
        className={`uppercase font-${font} font-bold text-11 md:text-13 leading-14 md:leading-16 tracking-5 pb-3 md:pb-0`}
      >
        time (minutes)
      </h2>
      <ul className="flex flex-col md:flex-row w-full justify-between items-center">
        <Time value="pomodoro" className="md:pr-6" />
        <Time value="short" className="md:pr-6" />
        <Time value="long" />
      </ul>
    </div>
  );
};

const Colors = ({ theme, themeDispatch, font }) => {
  const Color = ({ value }) => {
    return (
      <li>
        <button
          onClick={() => themeDispatch({ type: value })}
          className={`bg-${value} text-lg w-40 h-40 flex justify-center items-center rounded-full focus:shadow-md hover:shadow-md`}
        >
          {theme.color === value ? <GoCheck /> : ""}
        </button>
      </li>
    );
  };

  return (
    <div className="py-5 flex flex-col md:flex-row justify-between items-center">
      <h2
        className={`uppercase font-${font} font-bold text-11 md:text-13 leading-14 md:leading-16 tracking-5 pb-5 md:pb-0`}
      >
        color
      </h2>
      <ul className="flex flex-row w-1/2 md:w-1/3 justify-around">
        <Color value="red" />
        <Color value="blue-light" />
        <Color value="purple" />
      </ul>
    </div>
  );
};

const Fonts = ({ theme, themeDispatch, font }) => {
  const Font = ({ value }) => {
    return (
      <li>
        <button
          onClick={() => themeDispatch({ type: value })}
          className={`${
            theme.font === value ? "bg-blue-dark text-white" : "bg-neutral-200 text-blue-medium text-opacity-70"
          } font-${value} text-md w-40 h-40 flex justify-center items-center rounded-full focus:shadow-md hover:shadow-md`}
        >
          Aa
        </button>
      </li>
    );
  };

  return (
    <div className="py-5 flex flex-col md:flex-row justify-between items-center">
      <h2
        className={`uppercase font-${font} font-bold text-11 md:text-13 leading-14 md:leading-16 tracking-5 pb-5 md:pb-0`}
      >
        font
      </h2>
      <ul className="flex flex-row w-1/2 md:w-1/3 justify-around">
        <Font value="kumbh" />
        <Font value="roboto" />
        <Font value="space" />
      </ul>
    </div>
  );
};

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { color, font, setColor, setFont } = useAppContext();
  const { pomodoro, setPomodoro, short, setShort, long, setLong } = useTimeContext();

  const initialThemeState = { color: color, font: font };
  const initialTimeState = { pomodoro: pomodoro, short: short, long: long };

  const [theme, themeDispatch] = useReducer(themeReducer, initialThemeState);
  const [time, timeDispatch] = useReducer(timeReducer, initialTimeState);

  const Toggle = () => {
    setIsOpen(!isOpen);
    themeDispatch({ type: color });
    themeDispatch({ type: font });
    timeDispatch({ type: "pomodoro", value: pomodoro });
    timeDispatch({ type: "short", value: short });
    timeDispatch({ type: "long", value: long });
  };

  const updateTheme = () => {
    setColor(theme.color);
    setFont(theme.font);
    setPomodoro(time.pomodoro);
    setShort(time.short);
    setLong(time.long);
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
            <h3 className={`text-20 md:text-28 leading-25 md:leading-35 font-${font} font-bold`}>Settings</h3>
            <button className="px-3" onClick={() => Toggle()}>
              <IoMdClose className="text-14 text-blue-medium" />
            </button>
          </header>
          <Hr />
          <div className="px-5 flex flex-col pb-3 md:pb-0">
            <Times time={time} timeDispatch={timeDispatch} font={font} />
            <Hr />
            <Fonts theme={theme} themeDispatch={themeDispatch} font={font} />
            <Hr />
            <Colors theme={theme} themeDispatch={themeDispatch} font={font} />
          </div>
        </article>
        <div className="flex justify-center items-center -mb-6">
          <Button onClick={() => updateTheme()}>Apply</Button>
        </div>
      </Modal>
    </div>
  );
};
