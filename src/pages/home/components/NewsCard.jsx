import React from "react";
import blog1 from "../../../assets/blog1.jpg";
import teacherIcon from "../../../assets/icon13.png";
const NewsCard = ({ img, ...props }) => {
  return (
    <div className="news-card mb-[30px] lg:mb-0" {...props}>
      <img src={img} alt="" className="w-full rounded-[20px] mb-5" />
      <div className="text relative px-5">
        <span className="capitalize absolute top-[-35px] left-5 bg-[#ffd31d] px-5 font-[15px] h-6 leading-[24px] rounded-[30px]">
          english
        </span>
        <div className="date flex justify-between items-center">
          <span>17/09/2025</span>
          <span>by Admin</span>
          <span className="flex items-center gap-1 text-[var(--gray-color)]">
            <img src={teacherIcon} alt="" />
            Teachers,School
          </span>
        </div>
        <h3 className="my-1 text-lg text-[var(--text-color)] font-medium hover:text-[#155799] transition-[0.4s]">
          <a href="">Campus clean workshop</a>
        </h3>
        <p className="mb-[13px] text-[var(--gray-color)] text-[15px]">
          Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
          laoreet erat ornare sit amet
        </p>
        <a
          href=""
          className="text-[#155799] text-[15px] font-semibold flex items-center gap-1 capitalize"
        >
          read
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px]"
          >
            <defs>
              <style>
                {`
            .cls-1 {
              fill: #155799;
              stroke: #155799;
              strokeLinecap: round;
              strokeLinejoin: round;
              strokeWidth: 3px;
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
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
