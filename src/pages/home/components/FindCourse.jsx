import React from "react";
import courseImg from "../../../assets/course-img.png";
import icon11 from "../../../assets/icon11.png";
import CourseCard from "./CourseCard";
const FindCourse = () => {
  return (
    <section className="find-course py-10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2">
          <div>
            <h2 className="relative z-[100] text-[48px] leading-[55px] font-bold mb-4">
              Find Your Course
            </h2>
            <p className="text-[var(--gray-color)] text-[15px] leading-[22px] max-w-[530px] mb-5">
              ullam fringilla ipsum sed enim scelerisque, ac porttitor libero
              egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum
              dolor sit
            </p>
            <div className="flex gap-2.5 items-center mb-[30px]">
              <img src={icon11} alt="" />
              <p className="text-[#155799] text-[20px] font-medium">
                Call: <b>+2 342 5446 67</b>
              </p>
            </div>
            <div className="relative course-img hidden lg:block ">
              <img src={courseImg} alt="" className="w-[84%]" />
            </div>
          </div>
          <div>
            <CourseCard
              price="free"
              heading="Digital Transformation Conference"
              name="Amanda Kern"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1300"
              data-aos-delay="500"
            />
            <CourseCard
              price="$16"
              heading="Environment conference"
              name="Cvita Doleschall"
              move="lg:translate-x-[-100px!important]"
            />
            <CourseCard
              price="$8"
              heading="Campus clean workshop"
              name="Helena Brauer"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1300"
              data-aos-delay="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindCourse;
