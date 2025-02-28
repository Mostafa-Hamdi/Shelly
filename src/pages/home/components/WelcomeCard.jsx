import React from "react";

const WelcomeCard = ({ src, heading, disc, ...props }) => {
  return (
    <div
      className={`card mb-[30px] sm:mb-0 p-[25px_20px_19px] rounded-[10px] text-center sm:text-left lg:text-center`}
      {...props}
    >
      <img
        src={src}
        alt=""
        className="mb-[9px] mx-auto sm:mx-[initial] lg:mx-auto"
      />
      <h3 className="text-[19px] font-medium mb-1 text-[var(--text-color)] leading-[1.2]">
        {heading}
      </h3>
      <p className="text-[14px] leading-[20px] text-[var(--gray-color)]">
        {disc}
      </p>
    </div>
  );
};

export default WelcomeCard;
