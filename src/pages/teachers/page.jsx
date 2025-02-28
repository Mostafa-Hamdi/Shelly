import React from "react";
import AllTeachers from "./components/AllTeachers";
import Heading from "../../main components/Heading";

const Teachers = () => {
  return (
    <div className="teachers">
      <Heading pageName="teachers" />
      <AllTeachers />
    </div>
  );
};

export default Teachers;
