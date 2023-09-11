import React from "react";
import bg from "../../assets/about.avif";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate()
  const navigateAbout = () => {
    navigate('/about')
  }
  return (
    <div className=" mt-10 w-full px-5 pb-5 text-[#414042] md:pb-32 md:px-10 md:flex md:justify-center">
      <div className=" flex flex-col gap-2 md:w-[1250px] ">
        <div className=" md:flex md:justify-between md:px-10 md:items-center md:flex-row-reverse ">
          <div>
            <h3 className=" text-2xl md:text-3xl">a few words</h3>
            <h2 className=" text-5xl md:text-7xl">About us</h2>
            <h1 className=" my-5 md:w-[500px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
              tenetur illum! Veritatis, exercitationem et praesentium modi
              maxime quia adipisci laboriosam neque suscipit facere doloremque
              enim odio est nostrum molestiae. adipisci laboriosam neque
              suscipit facere doloremque enim odio est nostrum molestiae.
              adipisci laboriosam neque suscipit facere doloremque enim odio est
              nostrum molestiae.
            </h1>
            <div onClick={navigateAbout} className="hidden md:w-40 md:h-12 md:flex md:justify-center md:items-center md:bg-[#48A9A6] md:text-white">
              <h1>Know More</h1>
            </div>
          </div>
          <div
            className=" w-full h-[500px] bg-black mt-5 bg-cover bg-center md:w-[500px] md:h-[500px]"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default About;
