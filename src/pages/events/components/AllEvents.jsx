import React from "react";
import CourseCard from "../../home/components/CourseCard";
import Pagination from "./Pagination";

const AllEvents = () => {
  return (
    <section className="all-events py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-[30px]">
          <CourseCard
            heading="Digital Transformation Conference"
            name=" Amanda Kern"
            price="FREE"
          />
          <CourseCard
            heading="Environment conference"
            name=" Cvita Doleschall"
            price="$16"
          />
          <CourseCard
            heading="Campus clean workshop"
            name="Helena Brauer"
            price="$8"
          />
          <CourseCard
            heading="Digital Transformation Conference"
            name=" Amanda Kern"
            price="FREE"
          />
          <CourseCard
            heading="Environment conference"
            name=" Cvita Doleschall"
            price="$16"
          />
          <CourseCard
            heading="Campus clean workshop"
            name="Helena Brauer"
            price="$8"
          />
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default AllEvents;
