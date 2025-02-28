import React from "react";
import abt1 from "../../../assets/abt1.png";
const Welcome = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto grid md:grid-cols-2 ga-[30px] items-center">
        <div className="text mb-[30px] md:mb-0">
          <h2 className="text-[48px] font-bold leading-[60px] text-[var(--text-color)] mb-6">
            Welcome to <br />{" "}
            <span className="text-[var(--orange-color)]">Shelly</span> School
          </h2>
          <p className="text-[var(--gray-color)] text-[15px] leading-[22px] mb-[50px] max-w-[530px]">
            Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
            purus urna. Maecenas ultrices ligula a nisi dictum tristique.
            Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum
            leo sagittis et.
          </p>
          <a href="" className="main-btn relative ml-[0!important]">
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
                  <line
                    className="cls-1"
                    x1="29.08"
                    x2="3.08"
                    y1="16"
                    y2="16"
                  />
                  <line
                    className="cls-1"
                    x1="29.08"
                    x2="25.08"
                    y1="16"
                    y2="21"
                  />
                  <line
                    className="cls-1"
                    x1="29.08"
                    x2="25.08"
                    y1="16"
                    y2="11"
                  />
                </g>
              </svg>
            </div>
            classes
          </a>
        </div>
        <div className="image">
          <img src={abt1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
