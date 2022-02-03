import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObj1, homeObj2, homeObj3 } from "../components/InfoSection/Data";
import PageLayout from "./PageLayout";

const Home = () => {
  return (
    <>
      <PageLayout>
        <HeroSection />
        <InfoSection {...homeObj1} />
        <InfoSection {...homeObj2} />
        <InfoSection {...homeObj3} />
      </PageLayout>
    </>
  );
};

export default Home;
