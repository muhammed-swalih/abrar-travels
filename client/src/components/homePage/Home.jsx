import React from "react";
import "@fontsource/abril-fatface";
import bg from "../../assets/homeBg.avif";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="w-full h-auto bg-white bg-cover text-whtie md:h-screen">
      <div className="w-full h-[550px]  bg-black md:h-full">
        <div
          className="w-full h-full relative bg-cover "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2896&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <Navbar />
            <div className=" px-7 text-white h-full flex flex-col justify-center gap-8  md:pt-32 md:px-32 md:gap-10">
              <div className=" flex flex-col gap-3 md:flex md:flex-col md:gap-3">
                <h2 className=" text-white text-4xl tracking-wider md:text-[80px] md:w-[800px] md:leading-[100px] md:tracking-wide">
                  Travel & Explore the World
                </h2>
                <h1 className=" md:w-[600px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae quo deserunt aut exercitationem molestias, nihil
                  alias
                </h1>
              </div>
              <a href="https://wa.me/+918089104864">
                <div className=" w-52 rounded-md h-12 bg-[#30C7B5] flex justify-center items-center">
                  <h1 className=" uppercase text-sm">book my tour</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
