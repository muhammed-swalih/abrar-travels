import React from "react";
import bg from "../../assets/aboutBg.avif";
import who from "../../assets/who.avif";
import Navbar from "../homePage/Navbar";
import Footer from "../homePage/Footer";
import { FaAward, FaPercent } from "react-icons/fa";
import { BiTimeFive, BiSupport } from "react-icons/bi";
function AboutMain() {
  return (
    <div>
      <Navbar />
      <div className=" w-full h-auto ">
        <div
          className=" w-full h-72 bg-black bg-cover flex justify-center pb-5 items-end bg-center bg-opacity-50 md:h-[500px] md:bg-center md:pb-32 md:justify-start md:pl-32"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1554123168-b400f9c806ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)`,
          }}
        >
          <h2 className=" text-5xl text-white border px-1 py-1 border-white md:hidden">
            About Us
          </h2>
          <div className="hidden md:w-auto md:h-auto md:flex md:justify-center md:items-center  md:text-gray-200 md:text-8xl ">
            <h2>About US</h2>
          </div>
        </div>
        <div className=" mt-10 md:px-28">
          <div className=" w-full h-auto px-5 py-5 text-[#414042]">
            <div className=" md:flex md:flex-col md:gap-5">
              <h3 className=" text-4xl">a few words about </h3>
              <h2 className=" text-[42px] md:text-7xl">Who We Are </h2>
              <h1 className=" md:w-[600px] md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores voluptates blanditiis explicabo laboriosam? Neque et
                veniam ullam iste delectus natus,
              </h1>
            </div>
            <div className=" md:flex md:justify-between md:items-center">
              <div className=" my-5 w-full h-80 bg-black md:my-10 md:w-[500px] md:h-[700px]">
                <img className=" w-full h-full object-cover" src={who} alt="" />
              </div>
              <h1 className=" md:w-[600px] md:text-lg">
      
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate omnis tempore magnam est voluptatem! Animi
                necessitatibus iure repellat tempore adipisci qui quos, quasi
                delectus molestias veniam natus provident iusto!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat voluptatum rerum aperiam beatae nemo aut eveniet eos
                labore dolor sint quaerat amet praesentium necessitatibus
                dolorem, qui asperiores maiores aspernatur non. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate omnis tempore magnam est voluptatem! Animi
                necessitatibus iure repellat tempore adipisci qui quos, quasi
                delectus molestias veniam natus provident iusto!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat voluptatum rerum aperiam beatae nemo aut eveniet eos
                labore dolor sint quaerat amet praesentium necessitatibus
                dolorem, qui asperiores maiores aspernatur non. <br />
                
              </h1>
            </div>
          </div>
        </div>
        <div className=" my-10 items-center text-[#414042] md:flex md:px-28">
          <div className=" flex flex-col items-center gap-3 px-10 my-20 md:gap-8">
            <h1 className=" text-4xl text-[#30C7B5] md:text-5xl">
              <FaAward />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Affordable Travels</h2>
              <h1 className=" text-center md:text-lg">
                Lorem ipsum dolor sit amet consectetur .{" "}
              </h1>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3 px-10 my-20 md:gap-8">
            <h1 className=" text-4xl text-[#30C7B5] md:text-5xl">
              <BiTimeFive />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Guided Experience</h2>
              <h1 className=" text-center md:text-lg">
                Lorem ipsum dolor sit amet consectetur .{" "}
              </h1>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3 px-10 my-20 md:gap-8">
            <h1 className=" text-4xl text-[#30C7B5] md:text-5xl">
              <FaPercent />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Group Discount</h2>
              <h1 className=" text-center md:text-lg">
                Lorem ipsum dolor sit amet consectetur .{" "}
              </h1>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3 px-10 my-20 md:gap-8">
            <h1 className=" text-4xl text-[#30C7B5] md:text-5xl">
              <BiSupport />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Guest Support</h2>
              <h1 className=" text-center md:text-lg">
                Lorem ipsum dolor sit amet consectetur .{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMain;
