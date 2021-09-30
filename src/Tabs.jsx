import React from "react";

import { Button } from "./Button";

export const Tabs = () => {
  return (
    <ul className="bg-blue-dark flex flex-row rounded-full p-2">
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
