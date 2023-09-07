import React from "react";
import Home from "../components/homePage/Home";
import Packages from "../components/homePage/Packages";
import About from "../components/homePage/About";
import Reviews from "../components/homePage/Reviews";
import Experience from "../components/homePage/Experience";
import Ad from "../components/homePage/Ad";
import Footer from "../components/homePage/Footer";


function HomePage() {
  return (
    <div>
      <Home />
      <Packages />
      <About />
      <Reviews />
      <Experience />
      <Ad />
      <Footer />
    </div>
  );
}

export default HomePage;
