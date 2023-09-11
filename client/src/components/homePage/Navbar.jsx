import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
  return (
    <div className=" w-full h-20 bg-white px-2 py-2 fixed z-20">
      <div className=" flex justify-between items-center h-full">
        <div className=" md:flex md:justify-between md:items-center md:w-full md:px-16">
          <div className=" flex gap-2 items-center ">
            <img className=" " src={logo} alt="" width={50} />
            <div className=" flex flex-col">
              <h4 className=" font-semibold">Abrar Travel</h4>
              <h4 className="  text-xs flex justify-end mt-[-5px]">Wings</h4>
            </div>
          </div>
          <div className=" hidden md:flex md:gap-10">
            <h1
              onClick={navigateHome}
              className=" md:cursor-pointer md:hover:underline"
            >
              Home
            </h1>
            <h1
              onClick={navigateTour}
              className=" md:cursor-pointer md:hover:underline"
            >
              Packages
            </h1>
            <h1
              onClick={navigateAbout}
              className=" md:cursor-pointer md:hover:underline"
            >
              About us
            </h1>
            <h1
              onClick={navigateContact}
              className=" md:cursor-pointer md:hover:underline"
            >
              Contact
            </h1>
          </div>
        </div>
        <div className="h-full flex items-center md:hidden">
          <h1 className="text-4xl" onClick={toggleSidebar}>
            <CgMenuRight />
          </h1>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-52 h-screen bg-gray-200 z-50 transition-transform duration-300 ease-in-out transform md:hidden ${
          isSidebarOpen ? "" : "-translate-x-full"
        }`}
      >
        <ul className="pt-10 text-black text-center">
          <li className="flex justify-center mb-10">
            <img src={logo} alt="" width={50} />
          </li>
          <li className="text-lg mb-4" onClick={navigateHome}>
            <a href="#">Home</a>
          </li>
          <li className="text-lg mb-4" onClick={navigateTour}>
            <a href="#">Packages</a>
          </li>
          <li className="text-lg mb-4" onClick={navigateAbout}>
            <a href="#">About Us</a>
          </li>
          <li className="text- mb-4" onClick={navigateContact}>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className=" flex gap-5 mt-10 px-5 justify-center">
          <a href="https://wa.me/+918089104864">
            <h1 className=" text-black text-2xl">
              <FaWhatsapp />
            </h1>
          </a>
          <h1 className=" text-black text-2xl">
            <FaInstagram />
          </h1>
          <h1 className=" text-black text-2xl">
            <FaTwitter />
          </h1>
          <h1 className=" text-black text-2xl">
            <FaFacebook />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
