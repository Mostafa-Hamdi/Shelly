import React from "react";
import abt2 from "../../../assets/abt2.png";
const OurMissions = () => {
  return (
    <section className="our-missions py-10">
      <div className="container mx-auto flex flex-col-reverse md:grid grid-cols-2 gap-[30px] items-center">
        <div className="image">
          <img src={abt2} alt="" />
        </div>
        <div className="text">
          <span className="uppercase text-[var(--orange-color)] text-[15px] font-medium">
            about us
          </span>
          <h2 className="text-[48px] text-[var(--text-color)] mb-[18px] font-semibold">
            Our Mission
          </h2>
          <p className="text-[var(--gray-color)] text-[15px] leading-[22px] mb-[22px]">
            Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel.
            Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae
            elit ligula. Fusce eu rutrum nisl.
          </p>
          <ul className="missions">
            <li className="text-[var(--gray-color)] text-[15px] mb-2.5 pl-[30px] relative">
              Etiam ante nisl, maximus vitae sem non, dignissim
            </li>
            <li className="text-[var(--gray-color)] text-[15px] mb-2.5 pl-[30px] relative">
              Donec blandit, sapien eu porttitor blandit
            </li>
            <li className="text-[var(--gray-color)] text-[15px] mb-2.5 pl-[30px] relative">
              Sed at urna at massa viverra feugiat non
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurMissions;
