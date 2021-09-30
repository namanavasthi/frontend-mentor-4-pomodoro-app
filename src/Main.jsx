import React from "react";

import { Tabs } from "./Tabs";
import { Clock } from "./Clock";
import { Settings } from "./Settings";

export const Main = () => {
  return (
    <main>
      <Tabs />
      <Clock />
      <Settings />
    </main>
  );
};
