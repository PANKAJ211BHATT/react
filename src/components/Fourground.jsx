import React, { useRef } from "react";
import Card from "./card";

const Fourground = () => {
  const ref = useRef(null);

  const data = [
    {
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      fileSize: " .9mb",
      isClose: true,
      tag: true,
    },
    {
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      fileSize: " .9mb",
      isClose: true,
      tag: true,
    },
    {
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      fileSize: " .9mb",
      isClose: true,
      tag: true,
    },
  ];

  return (
    <div
      ref={ref}
      className=" fixed w-full h-screen z-[3] flex flex-wrap gap-10 p-5"
    >
      {data.map((item, index) => (
        <Card data={item} refrence={ref} />
      ))}
    </div>
  );
};

export default Fourground;
