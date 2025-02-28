import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import ClassCard from "./ClassCard";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={4} // Default slides per view
        slidesPerGroup={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next", // Custom next button
          prevEl: ".custom-prev", // Custom prev button
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // For small screens (320px)
          640: { slidesPerView: 2, spaceBetween: 20 }, // For medium screens (640px)
          768: { slidesPerView: 3, spaceBetween: 20 }, // For tablets (768px)
          1024: { slidesPerView: 4, spaceBetween: 30 }, // For desktops (1024px)
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ClassCard
            img={img1}
            heading="Natural Sciences & Mathematics Courses"
            name="Gypsy Hardinge"
            price="$67"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
          />
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
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

      {/* Custom Previous Button */}
      <div className="custom-prev">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g data-name="Layer 2" id="Layer_2">
            <path d="M13,26a1,1,0,0,1,.71-.29,1,1,0,0,1,0-1.42L5.41,16l8.3-8.29a1,1,0,0,1-1.42-1.42l-9,9a1,1,0,0,1,0,1.42l9,9A1,1,0,0,1,13,26Z" />
            <path
              d="M4,17H28a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2Z"
              style={{ transform: "translateY(-2px)" }}
            />
          </g>
        </svg>
      </div>

      {/* Custom Next Button */}
      <div className="custom-next">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g data-name="Layer 2" id="Layer_2">
            <path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z" />
            <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
