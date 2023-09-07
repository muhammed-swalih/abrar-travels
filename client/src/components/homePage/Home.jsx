import React from "react";
import "@fontsource/abril-fatface";
import bg from "../../assets/homeBg.avif";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="w-full h-auto bg-white bg-cover text-whtie">
      <div className="w-full h-[450px]  bg-black">
        <div
          className="w-full h-full relative bg-cover "
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1536308037887-165852797016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <Navbar/>
            <div className=" px-7 text-white flex flex-col gap-5 mt-32">
              <h2 className=" text-white text-4xl tracking-wider">
                Travel & Explore the World
              </h2>
              <h1 className=" ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae quo deserunt aut exercitationem molestias, nihil alias
              </h1>
              <div className=" w-52 rounded-md h-12 bg-[#30C7B5] flex justify-center items-center">
                <h1 className=" uppercase text-sm">book my tour</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
