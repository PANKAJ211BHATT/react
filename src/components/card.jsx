import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 550, bounceDamping: 100 }}
      className=" relative w-48 h-64 rounded-[30px] text-zinc-200 bg-zinc-900 py-6 px-4 overflow-hidden flex-shrink-0  "
    >
      <FaRegFileAlt className="text-xl" />
      <p className="font-semibold text-md mt-5">{data.decs}</p>
      <div className="absolute left-0 bottom-0  w-full ">
        <div className="flex  items-center  justify-between mb-9 px-3 ">
          <h5 className="">{data.fileSize}</h5>
          <span className="bg-zinc-400 w-7 h-7  rounded-full flex justify-center items-center">
            {data.isClose ? (
              <FiDownload size={"1rem"} color={"#fff"} />
            ) : (
              <IoIosClose size={"1.5rem"} color={"#fff"} />
            )}
          </span>
          {data.tag && (
            <div className=" bg-sky-700 absolute bottom-0 left-0 w-full h-8 text-center font-semibold ">
              <h1>Download now</h1>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
