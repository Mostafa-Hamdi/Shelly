import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ClassCard from "../../home/components/ClassCard";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";

const ClassCardsSlider = () => {
  return (
    <Swiper
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at once
      loop={true} // Infinite loop
      autoplay={{ delay: 1500 }} // Autoplay every 1.5 seconds
      pagination={{ clickable: true }} // Clickable pagination dots
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <ClassCard
          img={img1}
          heading="Natural Sciences & Mathematics Courses"
          name="Gypsy Hardinge"
          price="$67"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ClassCard
          img={img2}
          heading="Environmental Studies & Earth Sciences"
          name="Margje Jutten"
          price="$89"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ClassCard
          img={img3}
          heading="Hospitality, Leisure & Sports Courses"
          name="Hubert Franck"
          price="$47"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ClassCard
          img={img4}
          heading="Basic English Speaking and Grammar"
          name="Amanda Kern"
          price="$45"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClassCardsSlider;
