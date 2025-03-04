import React from "react";
import ico from "../../../assets/ico.png";
const ClassCard = ({ img, heading, time, name, price, ...props }) => {
  return (
    <div className="class-card rounded-[10px]" {...props}>
      <img
        src={img}
        alt=""
        className="rounded-[10px_10px_0_0] border-b-4 border-b-[#1161a0] w-full"
      />
      <div className="text p-[24px_15px_27px] border-[1px] border-[#d6d6d6] rounded-[0_0_10px_10px] relative">
        <div
          className="icon  p-1 w-10 h-10 rounded-full flex items-center justify-center absolute 
        top-[-20px] right-5"
        >
          <svg
            className="my-icon "
            height="20px"
            version="1.1"
            viewBox="0 0 20 20"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              fill="white"
              fillRule="evenodd"
              id="Page-1"
              stroke="none"
              strokeWidth="1"
            >
              <g
                fill="white"
                id="Core"
                transform="translate(-212.000000, -422.000000)"
              >
                <g
                  id="shopping-cart"
                  transform="translate(212.000000, 422.000000)"
                >
                  <path
                    d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <h3 className="text-[var(--text-color)] text-[18px] leading-[24px] font-semibold mb-[13px]">
          {heading}
        </h3>
        <pre className="text-[var(--gray-color)] text-[15px] leading-[21px] mb-5">
          {time}
        </pre>

        <div className="flex items-center justify-between">
          <div className="person flex items-center">
            <img src={ico} alt="" />
            <h4 className="ml-2 text-[15px] font-semibold text-[var(--gray-color)]">
              {name}
            </h4>
          </div>
          <h4 className="text-lg font-bold text-[#155799]">{price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
