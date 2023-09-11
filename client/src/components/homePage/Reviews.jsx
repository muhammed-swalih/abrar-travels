import { Rating } from "@mui/material";
import React from "react";

function Reviews() {
  return (
    <div className=" bg-black">
      <div
        className=" mt-5 w-full  h-auto relative bg-cover md:bg-center   "
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80)`,
        }}
      >
        <div className=" flex flex-col gap-10 py-16 px-5 ">
          <div className=" flex flex-col gap-2 items-center text-white md:gap-4">
            <h3 className=" text-2xl md:text-3xl">Our costumers loves us</h3>
            <h2 className=" text-4xl md:text-6xl md:tracking-wider">
              Latest Reviews
            </h2>
          </div>
          <div className=" w-full h-auto md:flex md:py-20">
            <div className=" w-full h-auto bg-black bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px] ">
              <h1 className=" text-white">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                est fugit quis delectus quisquam? Fugit, dicta? Velit sunt quis
                est dicta mollitia dolores harum, natus sed eaque laudantium
                voluptatum ab."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-white">Lauren Munog</h3>
            </div>
            <div className=" w-full h-auto bg-[#0c6f63] bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px]">
              <h1 className=" text-white">
                "Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis auctor, nisi elit consequat ipsum, nec
                sagittis sem nibh id elit. Duis sed odio amet nibh cursus a sit
                amet mauris."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-white">Ronald Snyder</h3>
            </div>
            <div className=" w-full h-auto bg-black bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px]">
              <h1 className=" text-white">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                est fugit quis delectus quisquam? Fugit, dicta? Velit sunt quis
                est dicta mollitia dolores harum, natus sed eaque laudantium
                voluptatum ab."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-white">Lauren Munog</h3>
            </div>
            <div className=" w-full h-auto bg-white bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10 md:h-[400px]">
              <h1 className=" text-black">
                "Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis auctor, nisi elit consequat ipsum, nec
                sagittis sem nibh id elit. Duis sed odio amet nibh cursus a sit
                amet mauris."
              </h1>
              <Rating value={5} />
              <h3 className=" text-3xl text-black">Jessica Hawkins</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
