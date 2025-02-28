import React from "react";
import newsBg from "../assets/news-bg.png";
import circle5 from "../assets/circle5.png";
const JoinForm = () => {
  return (
    <section
      className="join-form px-[15px] relative mb-[-130px!important] mt-10"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-delay="1000"
    >
      <div className="container mx-auto lg:flex items-center p-[57px_50px_55px!important] relative">
        <div className="text flex-[0_0_33.3%]">
          <h2 className="text-[40px] lg:text-[30px] leading-[44px] font-bold mb-[25px] text-center lg:text-left">
            Join us <br /> and stay tuned!
          </h2>
          <a
            href=""
            className="main-btn relative lg:ml-[0!important] mb-[30px!important] lg:mb-0"
          >
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
            join us
          </a>
        </div>
        <form action="" className="flex-[0_0_66.7%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <select name="class" id="" className="form-input">
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="form-input"
          ></textarea>
          <img src={circle5} alt="" className="absolute bottom-6 right-0" />
          <img src={newsBg} alt="" className="absolute bottom-6 left-0" />
        </form>
      </div>
    </section>
  );
};

export default JoinForm;
