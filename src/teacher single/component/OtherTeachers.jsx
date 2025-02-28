import React from "react";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import TeacherCard from "../../pages/home/components/TeacherCard";
const OtherTeachers = () => {
  return (
    <section className="teachers py-10">
      <div className="container mx-auto">
        <h2 className="relative z-[100] text-[48px] leading-[55px] font-bold mb-10 text-center">
          Other Teachers
        </h2>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4  gap-[30px]">
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
      </div>
    </section>
  );
};

export default OtherTeachers;
