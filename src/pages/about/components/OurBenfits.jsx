import React from "react";
import teachers from "../../../assets/teachers.png";
import globalCertificate from "../../../assets/global certificate.png";
import program from "../../../assets/best program.png";
import support from "../../../assets/student support.png";
import WelcomeCard from "../../home/components/WelcomeCard";
const OurBenfits = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col-reverse  md:grid grid-cols-2">
        <div className="text mb-[30px] md:mb-0">
          <h2 className="text-[48px] font-bold leading-[60px] text-[var(--text-color)] mb-6 capitalize">
            our benefits
          </h2>
          <p className="text-[var(--gray-color)] text-[15px] leading-[22px] mb-[50px] max-w-[530px]">
            Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel.
            Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae
            elit ligula. Fusce eu rutrum nisl. Vestibulum ut sagittis neque
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
            contacts
          </a>
        </div>
        <div className="cards md:grid grid-cols-2 gap-[30px]">
          <WelcomeCard
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            src={teachers}
            heading="Awesome Teachers"
            disc="Vivamus interdum, mauris interdum quis curdum sodales"
          />
          <WelcomeCard
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="100"
            src={globalCertificate}
            heading="Global Certificate"
            disc="Pelleneget tespharetra que fringilla egugue id eget pharetra"
          />
          <WelcomeCard
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="500"
            src={support}
            heading="Student Support Service"
            disc="Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus"
          />
          <WelcomeCard
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="300"
            src={program}
            heading="Best Programm"
            disc="Etiam risus neque, volutpat vel laoreet a, finibus volutpat non"
          />
        </div>
      </div>
    </section>
  );
};

export default OurBenfits;
