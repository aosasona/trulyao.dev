import React, { FC } from "react";
import Clock from "react-live-clock";

interface Props {
  Timezone: string;
}

const NavBar: FC<Props> = ({ Timezone }) => {
  return (
    <nav className="NavBar w-screen flex justify-between items-center fixed top-0 z-[99] py-5 px-4 lg:px-[3vw]">
      <h1 className="text-3xl text-neutral-600 lg:underline lg:underline-offset-4">
        AYODEJI
      </h1>

      <div className="flex flex-col lg:flex-row items-end lg:items-center gap-x-2">
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={Timezone || "Europe/London"}
          className="text-xl lg:text-3xl text-neutral-700 underline lg:no-underline underline-offset-4 Clock"
        />
        <h1 className="text-xs lg:text-sm text-neutral-700 mt-[2px] lg:mt-0">
          {Timezone}
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
