import React from "react";
import { FaAward } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { LiaUsersSolid } from "react-icons/lia";
function Experience() {
  return (
    <div className="  px-5 py-5 md:py-10 md:px-10">
      <div className="   md:flex justify-center gap-10">
        <div className=" rounded-md flex gap-5 items-center bg-gray-200 px-2 py-2  my-2 w-full md:h-auto md:py-5 md:gap-5 md:flex md:flex-col md:justify-center">
          <div>
            <h1 className=" text-5xl">
              <FaAward />
            </h1>
          </div>
          <div className=" flex flex-col md:items-center">
            <h2 className=" text-3xl ">10 years</h2>
            <h3 className=" text-xl text-[#0c6f63]">Experience</h3>
          </div>
        </div>
        <div className=" flex gap-5 items-center bg-gray-200 px-2 py-2 rounded-md my-2 w-full md:h-auto md:py-5 md:gap-1 md:flex md:flex-col md:justify-center">
          <div>
            <h1 className=" text-5xl md:text-7xl">
              <LiaUsersSolid />
            </h1>
          </div>
          <div className=" flex flex-col md:items-center">
            <h2 className=" text-3xl ">50k </h2>
            <h3 className=" text-2xl text-[#0c6f63]">Happy clients</h3>
          </div>
        </div>
        <div className=" flex gap-5 items-center bg-gray-200 px-2 py-2 rounded-md my-2 w-full md:h-auto md:py-5 md:gap-5 md:flex md:flex-col md:justify-center">
          <div>
            <h1 className=" text-5xl">
              <FcCollaboration />
            </h1>
          </div>
          <div className=" flex flex-col md:items-center">
            <h2 className=" text-3xl ">200 </h2>
            <h3 className=" text-2xl text-[#0c6f63]">collaborations</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
