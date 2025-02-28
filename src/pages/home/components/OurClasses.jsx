import React from "react";
import Slider from "./Slider";

const OurClasses = () => {
  return (
    <section className="our-classes py-10">
      <div className="container mx-auto">
        <h2 className="relative z-[100] text-[48px] font-bold mb-2">
          Our Classes
        </h2>
        <p className="text-[var(--gray-color)] text-[15px] leading-[22px] max-w-[530px] mb-10">
          Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
          laoreet erat ornare sit amet. Nulla sagittis faucibus lacus
        </p>
        <Slider />
        <a href="" className="main-btn relative translate-y-[-30px]">
          <div className="icon absolute left-3 top-1.5 bg-white rounded-full p-1">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px]"
            >
              <defs>
                <style>
                  {`
            .cls-1 {
              fill: none;
              stroke: #000;
              strokeLinecap: round;
              strokeLinejoin: round;
              strokeWidth: 2px;
            }
          `}
                </style>
              </defs>
              <g id="arrow-right">
                <line className="cls-1" x1="29.08" x2="3.08" y1="16" y2="16" />
                <line className="cls-1" x1="29.08" x2="25.08" y1="16" y2="21" />
                <line className="cls-1" x1="29.08" x2="25.08" y1="16" y2="11" />
              </g>
            </svg>
          </div>
          classes
        </a>
      </div>
    </section>
  );
};

export default OurClasses;
