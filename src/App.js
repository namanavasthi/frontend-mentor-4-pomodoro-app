import React, { useState } from "react";

import { Heading } from "./Heading";
import { Main } from "./Main";
import { Wrapper } from "./Wrapper";

import { DEFAULT_THEME, Context, DEFAULT_TIME, TimeContext } from "./Context";

const App = () => {
  const [font, setFont] = useState(DEFAULT_THEME.font);
  const [color, setColor] = useState(DEFAULT_THEME.color);

  const [pomodoro, setPomodoro] = useState(DEFAULT_TIME.pomodoro);
  const [short, setShort] = useState(DEFAULT_TIME.short);
  const [long, setLong] = useState(DEFAULT_TIME.long);

  return (
    <div className={`App w-full bg-blue-medium text-neutral-100 tracking-default font-${font} font-bold`}>
      <Context.Provider value={{ font, color, setFont, setColor }}>
        <TimeContext.Provider value={{ pomodoro, setPomodoro, short, setShort, long, setLong }}>
          <Wrapper className="flex flex-col items-center justify-center">
            <Heading />
            <Main />
          </Wrapper>
        </TimeContext.Provider>
      </Context.Provider>
    </div>
  );
};

export default App;
