import React from "react";
import ClassCard from "../../home/components/ClassCard";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import Pagination from "../../events/components/Pagination";
const AllClasses = () => {
  return (
    <section className="all-classes py-10">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-6">
          <ClassCard
            img={img1}
            heading="Natural Sciences & Mathematics Courses"
            name="Gypsy Hardinge"
            price="$67"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
          />
          <ClassCard
            img={img2}
            heading="Environmental Studies & Earth Sciences"
            name="Margje Jutten"
            price="$89"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="100"
          />
          <ClassCard
            img={img3}
            heading="Hospitality, Leisure & Sports Courses"
            name="Hubert Franck"
            price="$47"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="300"
          />
          <ClassCard
            img={img4}
            heading="Basic English Speaking and Grammar"
            name="Amanda Kern"
            price="$45"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <ClassCard
            img={img1}
            heading="Natural Sciences & Mathematics Courses"
            name="Gypsy Hardinge"
            price="$67"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="600"
          />
          <ClassCard
            img={img2}
            heading="Environmental Studies & Earth Sciences"
            name="Margje Jutten"
            price="$89"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="900"
          />
          <ClassCard
            img={img3}
            heading="Hospitality, Leisure & Sports Courses"
            name="Hubert Franck"
            price="$47"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="1100"
          />
          <ClassCard
            img={img4}
            heading="Basic English Speaking and Grammar"
            name="Amanda Kern"
            price="$45"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="1300"
          />
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default AllClasses;
