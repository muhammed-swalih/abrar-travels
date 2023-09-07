import React, { useEffect, useState } from "react";
import one from "../../assets/one.png";
import two from "../../assets/uk.jpg";
import three from "../../assets/wild.jpg";
import axios from "axios";
function Ad() {
    const [ad,setAd] = useState([])

    const fetchData = async() => {
        const response = await axios.get("http://localhost:5001/ads")
        console.log(response.data);
        setAd(response.data)
    }
    useEffect(()=>{
        fetchData();
    },[])
  const img = [one, two, three];
  return (
    <div>
      <div className=" px-5 py-5 flex flex-col w-full  justify-center items-center">
        <h3 className=" text-4xl">our </h3>
        <h2 className=" text-4xl">offers</h2>
      </div>
      <div className=" mt-5">
        {ad.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-full h-[540px] bg-black bg-cover"
              style={{
                backgroundImage: `url(${item.picUrl})`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Ad;
