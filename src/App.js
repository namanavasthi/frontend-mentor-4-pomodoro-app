import React from "react";

import { Heading } from "./Heading";
import { Main } from "./Main";
import { Wrapper } from "./Wrapper";

const App = () => {
  return (
    <div className="App w-full bg-blue-medium text-neutral-100 tracking-default font-kumbh font-bold">
      <Wrapper className="flex flex-col items-center justify-center">
        <Heading />
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
