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
          className=" w-full h-72 bg-black bg-cover flex justify-center pb-5 items-end bg-center bg-opacity-50 "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h2 className=" text-5xl text-[#414042] border px-1 py-1 border-black">
            About Us
          </h2>
        </div>
        <div className=" mt-10">
          <div className=" w-full h-auto px-5 py-5 text-[#414042]">
            <h3 className=" text-4xl">a few words about </h3>
            <h2 className=" text-[42px]">Who We Are </h2>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              voluptates blanditiis explicabo laboriosam? Neque et veniam ullam
              iste delectus natus,
            </h1>
            <div className=" my-5 w-full h-80 bg-black">
              <img className=" w-full h-full object-cover" src={who} alt="" />
            </div>
            <h1 className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              voluptatum rerum aperiam beatae nemo aut eveniet eos labore dolor
              sint quaerat amet praesentium necessitatibus dolorem, qui
              asperiores maiores aspernatur non. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              cupiditate omnis tempore magnam est voluptatem! Animi
              necessitatibus iure repellat tempore adipisci qui quos, quasi
              delectus molestias veniam natus provident iusto!
            </h1>
          </div>
        </div>
        <div className=" my-10 flex flex-col gap-20 items-center text-[#414042]">
          <div className=" flex flex-col items-center gap-3 px-10">
            <h1 className=" text-4xl text-[#30C7B5]">
              <FaAward />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Affordable Travels</h2>
              <h1 className=" text-center">Lorem ipsum dolor sit amet consectetur . </h1>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3 px-10">
            <h1 className=" text-4xl text-[#30C7B5]">
              <BiTimeFive />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Guided Experience</h2>
              <h1 className=" text-center">Lorem ipsum dolor sit amet consectetur . </h1>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3 px-10">
            <h1 className=" text-4xl text-[#30C7B5]">
              <FaPercent />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Group Discount</h2>
              <h1 className=" text-center">Lorem ipsum dolor sit amet consectetur . </h1>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3 px-10">
            <h1 className=" text-4xl text-[#30C7B5]">
              <BiSupport />
            </h1>
            <div className=" flex flex-col items-center">
              <h2 className=" text-2xl ">Guest Support</h2>
              <h1 className=" text-center">Lorem ipsum dolor sit amet consectetur . </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMain;
