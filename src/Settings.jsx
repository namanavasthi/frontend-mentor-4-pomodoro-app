import React from "react";

import { MdSettings } from "react-icons/md";

export const Settings = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center pb-40 md:pb-70 lg:pb-30">
      <button>
        <MdSettings className="text-28" />
      </button>
    </div>
  );
};
