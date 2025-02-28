import React from "react";
import NewsCard from "./NewsCard";
import blog1 from "../../../assets/blog1.jpg";
import blog2 from "../../../assets/blog2.jpg";
import blog3 from "../../../assets/blog3.jpg";
const RecentNews = () => {
  return (
    <section className="recent-news py-10">
      <div className="container mx-auto">
        <h2 className="relative z-[100] text-[48px] leading-[55px] font-bold mb-4 text-center">
          Recent News
        </h2>
        <p className="text-[var(--gray-color)] text-[15px] leading-[22px] max-w-[530px] mb-10 text-center mx-auto">
          Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
          laoreet erat ornare sit amet. Nulla sagittis faucibus lacusMorbi lorem
          sem, aliquet
        </p>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-[30px]">
          <NewsCard
            img={blog1}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            // data-aos-delay="300"
          />
          <NewsCard
            img={blog2}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-delay="500"
          />
          <NewsCard
            img={blog3}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-delay="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
