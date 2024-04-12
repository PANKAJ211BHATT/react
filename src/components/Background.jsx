import React from "react";

const Background = () => {
  return (
    <div className="fixed h-screen w-full z-[2]">
      <p className=" absolute top-1/4 left-1/2 -translate-x-[50%] -translate-y-[50%]  py-10 text-xl text-zinc-400">
        Documents.
      </p>
      <h1
        className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]
    text-[13vw]  leading-none tracking-tighter font-semibold text-zinc-900"
      >
        DOCS
      </h1>
    </div>
  );
};

export default Background;
