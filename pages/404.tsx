import Back from "@/components/Back";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center space-y-5">
      <h1 className="text-7xl lg:text-[6.5rem] font-normal">Oops!</h1>
      <h4 className="w-[80%] mx-auto text-center text-sm">That is a 404...</h4>
      <Back />
    </main>
  );
};

export default NotFound;
