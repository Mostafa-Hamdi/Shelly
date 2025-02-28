import React from "react";
import gallery1 from "../../../assets/gallery1.jpg";
import gallery2 from "../../../assets/gallery2.jpg";
import gallery3 from "../../../assets/gallery3.jpg";
import gallery4 from "../../../assets/gallery4.jpg";
import gallery5 from "../../../assets/gallery5.jpg";
import gallery6 from "../../../assets/gallery6.jpg";
import gallery7 from "../../../assets/gallery7.jpg";
import gallery8 from "../../../assets/gallery8.jpg";
import gallery9 from "../../../assets/gallery9.jpg";
import gallery10 from "../../../assets/gallery10.jpg";

const Gallery = () => {
  return (
    <section
      className="gallery py-10"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[15px] lg:gap-5">
        <img
          src={gallery1}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery2}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery3}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery4}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery5}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery6}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery7}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery8}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery9}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
        <img
          src={gallery10}
          alt=""
          className="rounded-[20px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Gallery;
