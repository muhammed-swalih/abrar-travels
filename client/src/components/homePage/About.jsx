import React from "react";
import bg from '../../assets/about.avif'
function About() {
  return (
    <div className=" mt-10 w-full px-5 pb-5 text-[#14261C]">
      <div className=" flex flex-col gap-2">
        <h3 className=" text-2xl">a few words</h3>
        <h2 className=" text-5xl">About us</h2>
        <h1 className=" my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, tenetur
          illum! Veritatis, exercitationem et praesentium modi maxime quia
          adipisci laboriosam neque suscipit facere doloremque enim odio est
          nostrum molestiae.
          adipisci laboriosam neque suscipit facere doloremque enim odio est
          nostrum molestiae.
          adipisci laboriosam neque suscipit facere doloremque enim odio est
          nostrum molestiae.
        </h1>
        <div className=" w-full h-[450px] bg-black mt-5 bg-cover bg-center"style={{backgroundImage : `url(https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>

        </div>
      </div>
    </div>
  );
}
export default About;
