import React from "react";

import { Heading } from "./Heading";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Wrapper } from "./Wrapper";

const App = () => {
  return (
    <div className="App w-full bg-blue-medium text-neutral-100 font-kumbh font-bold">
      <Wrapper className="flex flex-col items-center justify-center">
        <Heading />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default App;
