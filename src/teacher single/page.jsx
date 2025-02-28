import React from "react";
import TeacherHeading from "./component/TeacherHeading";
import OtherTeachers from "./component/OtherTeachers";
import Content from "./component/Content";

const TeacherSingle = () => {
  return (
    <div className="teacher-single">
      <TeacherHeading
        pageName="Faadi Al Rahman"
        path={"Teachers"}
        nestedPage="Teacher Single"
      />
      <Content />
      <OtherTeachers />
    </div>
  );
};

export default TeacherSingle;
