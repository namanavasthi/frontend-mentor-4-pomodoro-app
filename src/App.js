import React, { useState } from "react";

import { Heading } from "./Heading";
import { Main } from "./Main";
import { Wrapper } from "./Wrapper";

import { DEFAULT_THEME, Context } from "./Context";

const App = () => {
  const [font, setFont] = useState(DEFAULT_THEME.font);
  const [color, setColor] = useState(DEFAULT_THEME.color);

  return (
    <div className="App w-full bg-blue-medium text-neutral-100 tracking-default font-kumbh font-bold">
      <Context.Provider value={{ font, color, setFont, setColor }}>
        <Wrapper className="flex flex-col items-center justify-center">
          <Heading />
          <Main />
        </Wrapper>
      </Context.Provider>
    </div>
  );
};

export default App;
