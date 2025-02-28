import React from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import OurClasses from "./components/OurClasses";
import Teachers from "./components/Teachers";
import RecentNews from "./components/RecentNews";
import FindCourse from "./components/FindCourse";
import Gallery from "./components/Gallery";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Gallery />
      <OurClasses />
      <Teachers />
      <FindCourse />
      <RecentNews />
    </>
  );
};

export default Home;
