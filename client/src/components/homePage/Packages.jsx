import React, { useEffect, useState } from "react";
import packagePic from "../../assets/test.avif";
import { LuIndianRupee } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import axios from "axios";

function Packages() {
  const img = [
    "http://localhost:5001/uploads/Arab fares.jpg",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
  ];

  const [details, setDetails] = useState([]);
  const fetchPackages = async () => {
    const response = await axios.get("http://localhost:5001/packages");
    console.log(response.data);
    setDetails(response.data);
  };
  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <div>
      <div className=" px-5 py-5 flex flex-col gap-3 w-full  justify-center">
        <h3 className=" text-4xl">our most </h3>
        <h2 className=" text-4xl">Popular Tours</h2>
        <div className=" w-52 rounded-md h-12 bg-[#30C7B5] flex justify-center items-center">
          <h1 className=" uppercase text-sm text-white">View All Tours</h1>
        </div>
      </div>
      <div className=" mt-5">
        {details.map((item, index) => {
          if (index < 3) {
            return (
              <div
                key={index}
                className=" w-full h-[350px] bg-black bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.picUrl})`,
                }}
              >
                <div className=" w-full h-full bg-gradient-to-b from-gray-800 px-10 py-10">
                  <div className=" flex flex-col gap-3 text-white">
                    <div>
                      <h3 className=" text-2xl">{item.title}</h3>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h2 className=" text-2xl">{item.special}</h2>
                      <h1 className=" flex gap-2 items-center">
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
