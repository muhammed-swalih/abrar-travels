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
import { useMediaQuery } from "@react-hook/media-query";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateTour = () => {
    navigate("/tour");
  };
  const navigateContact = () => {
    navigate("/contact");
  };
  const isMediumScreen = useMediaQuery("(min-width : 1024px)");
  if (isMediumScreen) {
    return (
      <div className=" w-full bg-[#232323] h-auto py-10">
        <div className="mx-auto w-[1150px] h-auto flex justify-between">
          <div>
            <div className=" flex flex-col ">
              <div className=" flex ml-[-20px]">
                <img src={logo} alt="" width={130} />
                <h1 className=" my-auto font-semibold text-xl text-white">
                  Abrar Travel
                </h1>
                <h1 className=" uppercase my-auto text-xs mt-16 ml-[-55px] text-white">
                  wings
                </h1>
              </div>
              <div className=" flex justify-between w-1/4 gap-4 mt-5">
                <a
                  className=" text-xl text-white  px-2 py-2 rounded-full "
                  href="https://wa.me/8089104864"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className=" text-xl text-white  px-2 py-2 rounded-full "
                  href=""
                >
                  <FaInstagram />
                </a>
                <a
                  className=" text-xl text-white  px-2 py-2 rounded-full "
                  href=""
                >
                  <FaFacebook />
                </a>
                <a
                  className=" text-xl text-white  px-2 py-2 rounded-full "
                  href=""
                >
                  <HiLocationMarker />
                </a>
              </div>

              <div className=" flex flex-col mt-7">
                <div className=" text-orange-500 text-lg ">Menu</div>
                <ul>
                  <li
                    onClick={navigateHome}
                    className=" text-gray-400 cursor-pointer hover:underline hover:text-blue-800"
                  >
                    Home
                  </li>
                  <li
                    onClick={navigateTour}
                    className=" text-gray-400 cursor-pointer hover:underline hover:text-blue-800"
                  >
                    Packages
                  </li>
                  <li
                    onClick={navigateAbout}
                    className=" text-gray-400 cursor-pointer hover:underline hover:text-blue-800"
                  >
                    About Us
                  </li>
                  <li
                    onClick={navigateContact}
                    className=" text-gray-400 cursor-pointer hover:underline hover:text-blue-800"
                  >
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" flex flex-col my-auto text-gray-400 font-medium ">
            <div className=" flex flex-col">
              <h1 className=" flex gap-2">
                <span className=" mt-1">
                  <HiLocationMarker />
                </span>
                <span className=" text-lg font-medium upppercase">OFFICE</span>
              </h1>
              <hr className=" border border-1 border-gray-400 w-60 my-2" />
            </div>
            <div className=" ">
              <h1 className=" py-1 w-80">
                Deshabimani Road,Near kaloor Muslim Jamaath Masjid kaloor,
                cochin - 682 017
              </h1>
              <hr className="  border border-1 border-gray-400 w-60 my-2" />
            </div>
            <div className=" ">
              <h1 className=" py-1 w-80">abrarcok@gmail.com</h1>
              <h1>+91 80891 04864</h1>
              <h1>+91 99474 63666</h1>
              <hr className="  border border-1 border-gray-400 w-60 my-2" />
            </div>
            <div className=" flex justify-between">
              <h1 className=" text-[10px] uppercase hover:underline hover:text-blue-800">
                privacy policy{" "}
              </h1>
              <h1 className=" text-[10px] uppercase hover:underline hover:text-blue-800">
                terms & conditions{" "}
              </h1>
              <h1 className=" text-[10px] uppercase hover:underline hover:text-blue-800">
                cancellation{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className=" mt-10 ">
          <h1 className=" text-gray-500 text-xs uppercase text-center">
            developed by hexen
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full h-auto bg-[#414042] px-5 py-5 text-white">
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col justify-center ">
          <img src={logo} alt="" width={50} />
        </div>
        <div className=" flex gap-5">
          <a href="https://wa.me/+918089104864">
            <h1 className=" text-xl">
              <FaWhatsapp />
            </h1>
          </a>
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
        <div className=" flex flex-col ">
          <div className=" flex gap-2 items-center">
            <h1 className=" text-2xl">
              <HiLocationMarker />
            </h1>
            <h1 className=" uppercase">Office</h1>
          </div>
          <hr className=" my-3 w-32 md:hidden" />
          <div>
            <h1 className=" w-72">
              {" "}
              Deshabimani Road,Near kaloor Muslim Jamaath Masjid kaloor, cochin
              - 682 017
            </h1>
            <hr className=" my-2 md:hidden" />
            <div className="">
              <h1>abrarcok@gmail.com</h1>
              <h1>+91 80891 04864</h1>
              <h1>+91 99474 63666</h1>
            </div>
            <hr className=" mt-2 md:hidden" />
          </div>
          <div className=" flex justify-between mt-2 md:w-96">
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
        <hr className="md:hidden " />
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
