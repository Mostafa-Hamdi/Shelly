import React from "react";
import eventGallery1 from "../../../assets/event-gallery1.jpg";
import eventGallery2 from "../../../assets/event-gallery2.jpg";
import eventGallery3 from "../../../assets/event-gallery3.jpg";
import eventGallery4 from "../../../assets/event-gallery4.jpg";
import eventGallery5 from "../../../assets/event-gallery5.jpg";
import ci1 from "../../../assets/ci1.png";
import thumb1 from "../../../assets/thumb1.png";
import icon15 from "../../../assets/icon15.png";
import icon16 from "../../../assets/icon16.png";
import icon17 from "../../../assets/icon17.png";
import ClassCardsSlider from "./Slider";
const Content = () => {
  return (
    <section className="event-content py-10">
      {/* <div className="container">
      </div> */}
      <div className="container mx-auto flex gap-[40px]">
        <div className="content flex-[0_0_75%]">
          <h1 className="text-[24px] sm:text-[32px] leading-[35px] sm:leading-[45px] md:text-[40px] md:leading-[50px] xl:text-[64px] xl:leading-[80px] text-[var(--text-color)] mb-4">
            Basic English Speaking and Grammar
          </h1>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px] mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In
            sagittis lacinia lorem et tristique. Quisque mauris neque,
            sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In
            vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur
            vitae sapien vel lectus sagittis consequat. Nullam enim velit,
            dignissim vel viverra ac, eleifend ut tellus.
          </p>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px]">
            Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend.
            Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus
            mattis nunc quis turpis pretium sollicitudin. In eu semper justo.
            Phasellus facilisis hendrerit massa, sed auctor lacus convallis et.
            Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu.
            Donec commodo elementum tempus. In hac habitasse platea dictumst.
          </p>
          <img src={eventGallery1} alt="Event Image 1" className="mb-[20px]" />
          <div className="flex gap-[20px] items-center">
            <img src={eventGallery2} alt="Event Image 2" />
            <img src={eventGallery3} alt="Event Image 3" />
            <img src={eventGallery4} alt="Event Image 4" />
            <img src={eventGallery5} alt="Event Image 5" />
          </div>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px] mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In
            sagittis lacinia lorem et tristique. Quisque mauris neque,
            sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In
            vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur
            vitae sapien vel lectus sagittis consequat. Nullam enim velit,
            dignissim vel viverra ac, eleifend ut tellus.
          </p>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px]">
            Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend.
            Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus
            mattis nunc quis turpis pretium sollicitudin. In eu semper justo.
            Phasellus facilisis hendrerit massa, sed auctor lacus convallis et.
            Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu.
            Donec commodo elementum tempus. In hac habitasse platea dictumst.
          </p>
          <h2 className="text-[var(--text-color)] text-[20px] font-medium mb-[13px]">
            Education Programs
          </h2>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px] mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In
            sagittis lacinia lorem et tristique. Quisque mauris neque,
            sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In
            vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur
            vitae sapien vel lectus sagittis consequat. Nullam enim velit,
            dignissim vel viverra ac, eleifend ut tellus.
          </p>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px]">
            Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend.
            Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus
            mattis nunc quis turpis pretium sollicitudin. In eu semper justo.
            Phasellus facilisis hendrerit massa, sed auctor lacus convallis et.
            Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu.
            Donec commodo elementum tempus. In hac habitasse platea dictumst.
          </p>
          <h2 className="text-[var(--text-color)] text-[20px] font-medium mb-[13px]">
            Activities Involved
          </h2>
          <div className="flex">
            <ul className="flex-[0_0_50%]">
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Program opening
              </li>
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Dance and have fun
              </li>
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Present gifts to students
              </li>
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Program ending
              </li>
            </ul>
            <ul className="flex-[0_0_50%]">
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Program opening
              </li>
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Dance and have fun
              </li>
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Present gifts to students
              </li>
              <li className="relative text-[var(--gray-color)] text-[14px] pl-[31px] mb-[11px]">
                Program ending
              </li>
            </ul>
          </div>
          <a
            href=""
            className="main-btn  relative ml-[0!important] mt-[30px!important]"
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
            Enroll Now
          </a>
        </div>
        <div className="cards flex-[0_0_25%] transform translate-y-[-150px]">
          <div className="card p-[47px_20px_50px] rounded-[20px] border-[2px] border-[#f9b493] mb-[30px] bg-white">
            <h2 className="text-[20px] font-semibold text-center text-[var(--text-color)] mb-4">
              Class Information
            </h2>
            <div className="flex mb-4 justify-between">
              <span className="text-[var(--gray-color)] text-[14px] italic">
                Mon-Fri
              </span>
              <span className="text-[#155799] text-[14px] font-bold italic">
                10 AM - 12 AM
              </span>
            </div>
            <div className="flex mb-4 justify-between">
              <span className="text-[var(--gray-color)] text-[14px] italic">
                Age
              </span>
              <span className="text-[#155799] text-[14px] font-bold italic">
                9-14 Years
              </span>
            </div>
            <div className="flex mb-4 justify-between">
              <span className="text-[var(--gray-color)] text-[14px] italic">
                Class Size
              </span>
              <span className="text-[#155799] text-[14px] font-bold italic">
                20-30 Kids
              </span>
            </div>
            <div className="flex mb-4 justify-between">
              <span className="text-[var(--gray-color)] text-[14px] italic">
                Coures Duration
              </span>
              <span className="text-[#155799] text-[14px] font-bold italic">
                25 hours
              </span>
            </div>
            <div className="flex mb-[50px] items-center pt-[30px] border-t-[#ccc] border-t-[1px]">
              <img src={thumb1} alt="Speaker" />
              <div className="text pl-4">
                <span className="text-[--var(text-color)] text-lg leading-[20px] block mb-1.5">
                  Hubert Franck
                </span>
                <span className="text-[var(--gray-color)] text-lg leading-[20px] block">
                  English Teacher
                </span>
              </div>
            </div>
            <a href="" className="main-btn  relative mx-auto">
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
              Enroll Now
            </a>
          </div>
          <div className="card p-[20px_20px_20px] rounded-[20px] border-[2px] border-[#f9b493] mb-[30px]">
            <div className="flex items-center">
              <div className="class-sm-card">
                <img src={ci1} alt="Time" />
              </div>
              <div className="text pl-4">
                <span className="text-[--var(text-color)] text-lg leading-[20px] block">
                  Class Program
                </span>
                <span className="text-[var(--gray-color)] text-[13px]  block italic">
                  Adobe Acrobat file, 123 КB
                </span>
              </div>
            </div>
          </div>
          <div className="card rounded-[20px]">
            <ClassCardsSlider />
          </div>
          <div className="card p-[47px_20px_50px] rounded-[20px] border-[2px] border-[#f9b493] mb-[30px]">
            <h2 className="text-[var(--text-color)] text-[20px] font-medium mb-[13px]">
              Our Contacts
            </h2>
            <div className="flex mb-[50px] items-center">
              <img src={icon15} alt="Speaker" />
              <div className="text pl-4">
                <span className="text-[--var(text-color)] text-lg leading-[20px] block mb-1.5">
                  Call
                </span>
                <span className="text-[var(--gray-color)] text-lg leading-[20px] block">
                  +2 342 5446 67
                </span>
              </div>
            </div>
            <div className="flex mb-[50px] items-center">
              <img src={icon16} alt="Speaker" />
              <div className="text pl-4">
                <span className="text-[--var(text-color)] text-lg leading-[20px] block mb-1.5">
                  Work Time
                </span>
                <span className="text-[var(--gray-color)] text-lg leading-[20px] block">
                  Mon - Fri 8 AM - 5 PM
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <img src={icon17} alt="Speaker" />
              <div className="text pl-4">
                <span className="text-[--var(text-color)] text-lg leading-[20px] block mb-1.5">
                  Address
                </span>
                <span className="text-[var(--gray-color)] text-lg leading-[20px] block">
                  Franklin St, Greenpoint Ave
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
