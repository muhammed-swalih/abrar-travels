import React, { useEffect, useState } from "react";
import Navbar from "../homePage/Navbar";
import bg from "../../assets/tourBg.avif";
import Footer from "../homePage/Footer";
import { LuIndianRupee } from "react-icons/lu";
import axios from "axios";
import { IoIosTimer } from "react-icons/io";
function Tour() {
  const img = [
    "http://localhost:5001/uploads/domestic.jpg",
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVya2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
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
      <Navbar />
      <div
        className=" w-full h-72 bg-black bg-cover bg-bottom flex justify-center items-end pb-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className=" text-white text-5xl  border-4 px-2 py-1 "> Tours</h2>
      </div>
      <div className=" my-10 w-full px-5">
        <h2 className=" text-[40px] tracking-wider text-[#414042] text-center">
          Top Destination
        </h2>
        <div className=" w-full my-10 flex flex-col gap-10 text-[#414042]">
          {details.map((item, index) => {
            return (
              <div className=" flex flex-col gap-5" key={index}>
                <div
                  className=" w-full h-60 bg-black bg-cover"
                  style={{ backgroundImage: `url(${item.picUrl})` }}
                ></div>
                <div className=" flex flex-col gap-2">
                  <h3 className=" text-3xl tracking-wider">{item.title}</h3>
                  <hr className=" text-[#414042] border-[#414042] w-16" />
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className=" text-[#414042] text-2xl tracking-wider">
                    {item.special}
                  </h2>
                  <h1 className=" flex items-center">
                    <LuIndianRupee />
                    {item.price}
                  </h1>
                  <h1 className=" flex gap-2 items-center">
                    <h1 className=" text-xl"><IoIosTimer/></h1>
                    {item.days}
                  </h1>

                  <h1>{item.description}</h1>
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
