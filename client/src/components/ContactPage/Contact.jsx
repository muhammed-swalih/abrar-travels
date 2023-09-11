import React from "react";
import bg from "../../assets/contactBg.avif";
import Navbar from "../homePage/Navbar";
import {
  FaLocationDot,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from "../homePage/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div
        className=" w-full h-72 bg-black bg-cover flex justify-center items-end pb-10   md:justify-start md:pl-32  md:items-end md:pb-32 md:h-[500px] md:bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1629624927838-3b39b7fdd33c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80)`,
        }}
      >
        <h2 className=" text-white text-3xl px-2 py-1 border-4 border-white md:hidden">
          Contact
        </h2>
        <div className="hidden md:w-auto md:h-auto md:flex md:justify-center md:items-center  md:text-white md:text-8xl">
          <h2>Contact</h2>
        </div>
      </div>
      <div className=" my-10 px-8 text-[#414042] md:px-32">
        <h2 className=" text-4xl tracking-wider md:text-7xl md:mt-24">
          Start Your Journey
        </h2>
        <div className=" mt-20 flex flex-col gap-12 md:mt-10">
          <div className=" flex flex-col gap-2">
            <h2 className=" text-2xl tracking-wider md:text-3xl">
              Contact or Visit Us
            </h2>
            <h1 className=" md:w-[600px] md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              recusandae sequi voluptas beatae tenetur ullam perferendis quae
              aperiam
            </h1>
          </div>
          <div className=" flex flex-col gap-5">
            <div className=" flex gap-5 items-center">
              <h1 className="text-xl  ">
                <FaLocationDot />
              </h1>
              <h1 className=" md:text-lg md:w-96">
                Deshabimani Road, Near kaloor Muslim Jamaath Masjid kaloor,
                cochin - 682 017
              </h1>
            </div>
            <div className=" flex gap-5 items-center">
              <h1 className=" text-xl">
                <MdEmail />
              </h1>
              <h1 className=" md:text-lg md:w-96">abrarcok@gmail.com</h1>
            </div>
            <div className=" flex gap-5 items-center">
              <h1 className=" text-xl">
                <IoLogoWhatsapp />
              </h1>
              <h1 className=" md:text-lg md:w-96">+91 80891 04864</h1>
            </div>
            <div className=" flex gap-5 items-center">
              <h1 className=" text-xl">
                <BsFillTelephoneFill />
              </h1>
              <h1 className=" md:text-lg md:w-96">+91 99474 63666</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <h3 className=" text-3xl tracking-wider">Let's keep in touch !</h3>

            <div className=" flex gap-5 text-xl">
              <a href="https://wa.me/+918089104864">
                <h1 className=" bg-gray-100 px-3 py-3 rounded-full">
                  <FaWhatsapp />
                </h1>
              </a>
              <h1 className=" bg-gray-100 px-3 py-3 rounded-full">
                <FaInstagram />
              </h1>
              <h1 className=" bg-gray-100 px-3 py-3 rounded-full">
                <FaFacebook />
              </h1>
              <h1 className=" bg-gray-100 px-3 py-3 rounded-full">
                <FaTwitter />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
