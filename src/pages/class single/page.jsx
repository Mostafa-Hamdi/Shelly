import React from "react";
import classSingle from "../../assets/class-single-banner.jpg";
import Content from "./components/Content";
const ClassSingle = () => {
  return (
    <div className="class-single">
      <div className="banner">
        <img src={classSingle} alt="" />
        <Content />
      </div>
    </div>
  );
};

export default ClassSingle;
