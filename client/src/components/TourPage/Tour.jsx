import React, { useEffect, useState } from "react";
import Navbar from "../homePage/Navbar";
import bg from "../../assets/tourBg.avif";
import Footer from "../homePage/Footer";
import { LuIndianRupee } from "react-icons/lu";
import axios from "axios";
import { IoIosTimer } from "react-icons/io";
function Tour() {
  const [details, setDetails] = useState([]);

  const fetchPackages = async () => {
    const response = await axios.get(
      "https://wings-52gz.onrender.com/packages"
    );

    if (response.status === 200) {
      localStorage.setItem("tour", JSON.stringify(response.data));
      const packages = localStorage.getItem("tour");
      const parsedPackages = JSON.parse(packages);
      setDetails(parsedPackages);
      console.log(parsedPackages);
    }
  };
  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <div>
      <Navbar />
      <div
        className=" w-full h-72 bg-black bg-cover bg-bottom flex justify-center items-end pb-10 md:h-[500px] md:bg-center md:justify-start md:pl-32  md:items-end md:pb-32"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1554110397-9bac083977c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)`,
        }}
      >
        <h2 className=" text-white text-5xl  border-4 px-2 py-1 md:hidden">
          {" "}
          Tours
        </h2>
        <div className="hidden md:w-auto md:h-auto md:flex md:justify-center md:items-center  md:text-white md:text-8xl ">
          <h2>Tours</h2>
        </div>
      </div>
      <div className=" mt-20 w-full px-5 md:px-32">
        <h2 className=" text-[40px] tracking-wider text-[#414042] text-center md:text-left  md:text-7xl">
          Top Destination
        </h2>
        <div className=" w-full mb-10  text-[#414042] md:flex md:flex-wrap  md:justify-center md:mt-5 md:gap-3 ">
          {details.map((item, index) => {
            return (
              <div className=" flex flex-col gap-5 my-10 md:flex" key={index}>
                <div
                  className=" w-full h-72 bg-black bg-cover md:w-96"
                  style={{ backgroundImage: `url(${item.picUrl})` }}
                ></div>
                <div className=" flex flex-col gap-2">
                  <h3 className=" text-3xl tracking-wider">{item.title}</h3>
                  <hr className=" text-[#414042] border-[#414042] w-16" />
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className=" text-[#414042] text-2xl tracking-wider md:text-3xl">
                    {item.special}
                  </h2>
                  <h1 className=" flex items-center">
                    <LuIndianRupee />
                    {item.price}
                  </h1>
                  <h1 className=" flex gap-2 items-center">
                    <h1 className=" text-xl">
                      <IoIosTimer />
                    </h1>
                    {item.days}
                  </h1>

                  <h1 className=" md:w-72">{item.description}</h1>
                  <a href="https://wa.me/+918089104864">
                    <div className=" w-40 h-12 bg-[#48A9A6] flex justify-center items-center text-white mt-5 rounded">
                      <h1>Book Now</h1>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tour;
