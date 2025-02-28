import React from "react";
import TeacherCard from "../../home/components/TeacherCard";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";
import Pagination from "../../events/components/Pagination";
const AllTeachers = () => {
  return (
    <section className="all-teachers py-10">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] sm:mb-6">
          <TeacherCard
            img={img5}
            name="Polina Kerston"
            jobTitle="English Teacher"
          />
          <TeacherCard
            img={img6}
            name="Faadi Al Rahman"
            jobTitle="Instructor"
          />
          <TeacherCard
            img={img7}
            name="Chikelu Obasea"
            jobTitle="Art Teacher"
          />
          <TeacherCard img={img8} name="Katayama Fumiki" jobTitle="Teacher" />
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default AllTeachers;
