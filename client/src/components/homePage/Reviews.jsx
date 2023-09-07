import { Rating } from "@mui/material";
import React from "react";

function Reviews() {
  return (
    <div className=" bg-black">
        
    <div
      className=" mt-5 w-full  h-auto relative bg-cover "
      style={{
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1677622923387-71062ea4b667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60)`,
      }}
    >
      <div className=" flex flex-col gap-10 py-16 px-5 ">
        <div className=" flex flex-col gap-2 items-center text-white">
          <h3 className=" text-2xl">Our costumers loves us</h3>
          <h2 className=" text-4xl">Latest Reviews</h2>
        </div>
        <div className=" w-full h-auto ">
          <div className=" w-full h-auto bg-black bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10">
            <h1 className=" text-white">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est fugit quis delectus quisquam? Fugit, dicta? Velit sunt quis
              est dicta mollitia dolores harum, natus sed eaque laudantium
              voluptatum ab."
            </h1>
            <Rating value={5} />
            <h3 className=" text-3xl text-white">Lauren Munog</h3>
          </div>
          <div className=" w-full h-auto bg-[#0c6f63] bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10">
            <h1 className=" text-white">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est fugit quis delectus quisquam? Fugit, dicta? Velit sunt quis
              est dicta mollitia dolores harum, natus sed eaque laudantium
              voluptatum ab."
            </h1>
            <Rating value={5} />
            <h3 className=" text-3xl text-white">Lauren Munog</h3>
          </div>
          <div className=" w-full h-auto bg-black bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10">
            <h1 className=" text-white">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est fugit quis delectus quisquam? Fugit, dicta? Velit sunt quis
              est dicta mollitia dolores harum, natus sed eaque laudantium
              voluptatum ab."
            </h1>
            <Rating value={5} />
            <h3 className=" text-3xl text-white">Lauren Munog</h3>
          </div>
          <div className=" w-full h-auto bg-white bg-opacity-70 flex flex-col gap-10 justify-center px-10 py-10">
            <h1 className=" text-black">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est fugit quis delectus quisquam? Fugit, dicta? Velit sunt quis
              est dicta mollitia dolores harum, natus sed eaque laudantium
              voluptatum ab."
            </h1>
            <Rating value={5} />
            <h3 className=" text-3xl text-black">Lauren Munog</h3>
          </div>
          
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Reviews;
