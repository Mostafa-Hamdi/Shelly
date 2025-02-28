import React from "react";
import Heading from "../../main components/Heading";
import OurClasses from "../home/components/OurClasses";
import Welcome from "./components/Welcome";
import OurMissions from "./components/OurMissions";
import OurBenfits from "./components/OurBenfits";

const About = () => {
  return (
    <div className="about">
      <Heading pageName="about us" />
      <Welcome />
      <OurMissions />
      <OurBenfits />
      <OurClasses />
    </div>
  );
};

export default About;
