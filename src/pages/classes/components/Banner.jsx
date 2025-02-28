import React from "react";

const Banner = () => {
  return (
    <section className="banner py-10">
      <div className="container mx-auto p-[90px_15px] lg:p-[115px_80px_127px]">
        <span className="text-[var(--orange-color)] text-[16px] font-medium capitalize">
          Try now
        </span>
        <h2 className="text-[30px] sm:text-[48px] mb-[21px]">
          Start Investing in You
        </h2>
        <a href="" className="main-btn ml-[0!important] relative">
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

export default Banner;
