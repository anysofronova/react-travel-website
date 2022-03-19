import "../../App.scss";
import HeroSection from "../HeroSection";
import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
