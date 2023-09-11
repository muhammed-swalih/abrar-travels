import React, { useEffect, useState } from "react";
import packagePic from "../../assets/test.avif";
import { LuIndianRupee } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Packages() {
  const img = [
    "http://localhost:5001/uploads/Arab fares.jpg",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
  ];
  const navigate = useNavigate()

  const navigateTour = () => {
    navigate('/tour')
  }

  const [details, setDetails] = useState([]);
  const fetchPackages = async () => {
    const response = await axios.get(
      "https://wings-52gz.onrender.com/packages"
    );
    if (response.status === 200) {
      localStorage.setItem("packages", JSON.stringify(response.data));
      const packages = localStorage.getItem("packages");
      const parsedPackages = JSON.parse(packages);
      setDetails(parsedPackages);
      console.log(parsedPackages);
    }
  };
  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <div className=" md:flex md:justify-between md:pl-24 md:py-20">
      <div className=" px-5 py-5 flex flex-col text-[#414042] gap-3 w-full  justify-center md:gap-16 ">
        <div className=" md:flex md:flex-col md:gap-6">
          <h3 className=" text-4xl md:text-3xl">our most </h3>
          <h2 className=" text-4xl md:text-[75px]">Popular Tours</h2>
        </div>

        <div onClick={navigateTour} className=" w-52 rounded-md h-12 bg-[#30C7B5] flex justify-center items-center">
          <h1 className=" uppercase text-sm text-white">View All Tours</h1>
        </div>
      </div>
      <div className=" mt-5 md:flex md:justify-center">
        {details.map((item, index) => {
          if (index < 4) {
            return (
              <div
                key={index}
                className={
                  index === 1
                    ? "w-full h-[350px] bg-black bg-cover bg-center md:w-48 md:h-[430px] md:mt-[-250px] md:z-10"
                    : index === 2
                    ? "w-full h-[350px] bg-black bg-cover bg-center md:w-48 md:h-[430px] md:mt-[-180px] md:z-10"
                    : index === 3
                    ? "w-full h-[350px] bg-black bg-cover bg-center md:w-48 md:h-[430px] md:mt-[-250px] md:z-10"
                    : "w-full h-[350px] bg-black bg-cover bg-center md:w-48 md:h-[430px] md:mt-[-180px] md:z-10"
                }
                style={{
                  backgroundImage: `url(${item.picUrl})`,
                }}
              >
                <div className=" w-full h-full bg-gradient-to-b from-gray-800 px-10 py-10 md:px-5">
                  <div className=" flex flex-col gap-3 text-white">
                    <div>
                      <h3 className=" text-2xl md:text-2xl">{item.title}</h3>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h2 className=" text-2xl md:text-xl">{item.special}</h2>
                      <h1 className=" flex gap-2 items-center md:items-center md:text-xs">
                        <IoIosTimer />
                        {item.days}
                      </h1>
                      <h1 className=" flex items-center">
                        <LuIndianRupee />
                        {item.price}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Packages;
