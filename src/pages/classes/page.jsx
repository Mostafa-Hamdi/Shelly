import React from "react";
import Heading from "../../main components/Heading";
import Banner from "./components/Banner";
import AllClasses from "./components/AllClasses";

const Classes = () => {
  return (
    <div className="classes">
      <Heading pageName="classes" />
      <Banner />
      <AllClasses />
    </div>
  );
};

export default Classes;
