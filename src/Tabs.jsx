import React from "react";

import { Button } from "./Button";
import { useTabContext } from "./Context";

export const Tabs = () => {
  const { tab, setTab } = useTabContext();

  const Tab = ({ value, text }) => {
    return (
      <li className="px-2">
        <Button type="tabs" active={value === tab} onClick={() => setTab(value)}>
          {text}
        </Button>
      </li>
    );
  };

  return (
    <ul className="bg-blue-dark flex flex-row rounded-full p-2 mb-45 md:mb-100 lg:mb-45 relative z-10">
      <Tab value="pomodoro" text="pomodoro" />
      <Tab value="short" text="short break" />
      <Tab value="long" text="long break" />
    </ul>
  );
};
