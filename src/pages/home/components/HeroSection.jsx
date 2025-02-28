import React, { useEffect } from "react";
import bannerImg from "../../../../src/assets/banner-img.png";
import circle from "../../../../src/assets/circle.png";
import circle1 from "../../../assets/circle1.png";
const HeroSection = () => {
  useEffect(() => {
    document
      .querySelector(".hero-section .text")
      .classList.add("animate-right");
    document
      .querySelector(".hero-section .image")
      .classList.add("animate-zoom-in");
  });
  return (
    <div className="hero-section max-h-[750px] overflow-visible pt-[120px] lg:pt-[200px] pb-10">
      <div className="container flex mx-auto lg:grid lg:grid-cols-2 items-center">
        <div className="text px-4 fade-right relative md:flex-[0_0_60%]">
          <h1 className="text-[35px] sm:text-[40px] leading-[50px] lg:text-[65px] text-center md:text-left font-semibold text-[var(--text-color)] lg:leading-[80px] lg:pr-5 mb-[26px]">
            The Smarter Way to Learn
            <span className="text-[var(--orange-color)]">Anything</span>
          </h1>
          <p className="max-w-[575px] text-[15px] leading-[22px] mb-[59px] text-[var(--gray-color)]">
            Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus
            turpis, id mollis est rutrum nec. Sed interdum nisi id libero
            tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus,
            ullamcorper sed
          </p>
          <h3 className="absolute text-[#f374351f] font-bold text-[190px] top-[70px] left-[-25%] capitalize">
            Shelly
          </h3>
          <form action="" className="max-w-[475px]">
            <div className="relative">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Class"
              />

              <svg
                enableBackground="new 0 0 32 32"
                id="Glyph"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="absolute top-1/2 right-4 translate-y-[-50%] w-6 h-auto cursor-pointer"
              >
                <path
                  d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                  id="XMLID_223_"
                />
              </svg>
              <img
                src={circle}
                alt=""
                className="absolute top-[0%] left-6 translate-y-[-50%] z-[-1]"
              />
              <img
                src={circle1}
                alt=""
                className="absolute top-[40%] right-[-15px] translate-y-[-50%] z-[-1]"
              />
            </div>
          </form>
        </div>
        <div className="image relative hidden md:block flex-[0_0_40%]">
          <img src={bannerImg} alt="" className="mx-auto" />
          <img
            src="./src/assets/elements.png"
            alt=""
            className="absolute top-[28%] right-[35%] h-auto w-[230px] circles-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
