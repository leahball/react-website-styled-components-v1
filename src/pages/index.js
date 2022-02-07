import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObj1, homeObj2 } from "../components/InfoSection/Data";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObj2} />
      <InfoSection {...homeObj1} />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
