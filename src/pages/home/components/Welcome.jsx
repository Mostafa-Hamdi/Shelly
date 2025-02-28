import React from "react";
import WelcomeCard from "./WelcomeCard";
import teachers from "../../../assets/teachers.png";
import globalCertificate from "../../../assets/global certificate.png";
import program from "../../../assets/best program.png";
import support from "../../../assets/student support.png";
const Welcome = () => {
  return (
    <div className="welcome-section py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-[var(--text-color)] text-[48px] font-bold mb-[7px]">
          Welcome to <span className="text-[var(--orange-color)]">Shelly</span>
        </h2>
        <p className="text-[var(--gray-color)] max-w-[430px] mx-auto text-[15px]">
          Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
          interdum, mauris quis cursus sodales, urn
        </p>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-10">
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
            data-aos-delay="300"
            src={program}
            heading="Best Programm"
            disc="Etiam risus neque, volutpat vel laoreet a, finibus volutpat non"
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
        </div>
      </div>
    </div>
  );
};

export default Welcome;
