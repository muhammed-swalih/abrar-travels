import React from "react";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
function Footer() {
  return (
    <div className=" w-full h-auto bg-[#414042] px-5 py-5 text-white">
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col justify-center ">
          <img src={logo} alt="" width={50} />
        </div>
        <div className=" flex gap-5">
          <h1 className=" text-xl">
            <FaWhatsapp />
          </h1>
          <h1 className=" text-xl">
            <FaInstagram />
          </h1>
          <h1 className=" text-xl">
            <FaFacebook />
          </h1>
          <h1 className=" text-xl">
            <FaTelegram />
          </h1>
        </div>
        <div className=" flex flex-col ga">
          <div className=" flex gap-2 items-center">
            <h1 className=" text-2xl">
              <HiLocationMarker />
            </h1>
            <h1 className=" uppercase">Office</h1>
          </div>
          <hr className=" my-3 w-32" />
          <div>
            <h1 className=" w-72">
              {" "}
              Deshabimani Road,Near kaloor Muslim Jamaath Masjid kaloor, cochin
              - 682 017
            </h1>
            <hr className=" my-2" />
            <div className="">
              <h1>abrarcok@gmail.com</h1>
              <h1>+91 80891 04864</h1>
              <h1>+91 99474 63666</h1>
            </div>
            <hr className=" mt-2" />
          </div>
          <div className=" flex justify-between mt-2">
            <h1 className=" text-[11px] uppercase">privacy policy</h1>
            <h1 className=" text-[11px] uppercase">Terms & conditions</h1>
            <h1 className=" text-[11px] uppercase">cancellations</h1>
          </div>
        </div>

        <div className=" flex gap-5">
          <h1>Home</h1>
          <h1>About us</h1>
          <h1>Tours</h1>
          <h1>Contact</h1>
        </div>
        <hr className=" " />
        <div className="">
          <h1 className=" uppercase text-xs w-full flex justify-center">
            Developed by hexen
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
