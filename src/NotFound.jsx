import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errorPage relative h-[100vh]">
      <div className="container mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="text-[70px] md:text-[120px] lg:text-[150px] font-bold text-[var(--orange-color)]">
          Oops!
        </h1>
        <p className="text-lg md:text-[28px] lg:text-[64px] lg:leading-[100px] text-[var(--text-color)] mb-[35px]">
          The page does not exist
        </p>
        <Link to="/" className="main-btn relative">
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
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
