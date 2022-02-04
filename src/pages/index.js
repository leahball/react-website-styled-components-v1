import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObj1, homeObj2 } from "../components/InfoSection/Data";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObj2} />
      <InfoSection {...homeObj1} />
      <Services />
    </>
  );
};

export default Home;
