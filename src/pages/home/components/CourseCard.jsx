import React from "react";
import ico2 from "../../../assets/ico2.png";
import shape from "../../../assets/shape3.png";
const CourseCard = ({ heading, name, price, move, ...props }) => {
  return (
    <div className={`course-card relative ${move}`} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fdc830"
            width={"20px"}
            height={"20px"}
          >
            <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
          </svg>
          <p>
            <span className="mr-3">29/07/2020</span> <span>11AM to 15PM</span>
          </p>
        </div>
        <span className="uppercase text-[#155799] text-lg font-bold">
          {price}
        </span>
      </div>
      <h3 className="text-[22px] text-[var(--text-color)] font-medium mt-[18px] mb-[22px] capitalize">
        <a href="">{heading}</a>
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={ico2} alt="" />
          <span className="text-[var(--gray-color)] text-[15px]">
            <a href=""> {name}</a>
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <svg
            height="20px"
            viewBox="0 0 48 48"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fdc830"
          >
            <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
          <span className="text-[var(--gray-color)] text-[15px]">
            43 castle road 517 district
          </span>
        </div>
      </div>
      <img
        src={shape}
        alt=""
        className="absolute top-[8px] left-[-2px] h-[92%]"
      />
    </div>
  );
};

export default CourseCard;
