import React from "react";

import { Button } from "./Button";

export const Tabs = () => {
  return (
    <ul className="bg-blue-dark flex flex-row rounded-full p-2 mb-45 md:mb-100 lg:mb-45 relative z-10">
      <li>
        <Button type="tabs" active={true}>
          pomodoro
        </Button>
      </li>
      <li>
        <Button type="tabs">short break</Button>
      </li>
      <li>
        <Button type="tabs">long break</Button>
      </li>
    </ul>
  );
};
