import React from "react";
import eventGallery1 from "../../../assets/event-gallery1.jpg";
import eventGallery2 from "../../../assets/event-gallery2.jpg";
import eventGallery3 from "../../../assets/event-gallery3.jpg";
import eventGallery4 from "../../../assets/event-gallery4.jpg";
import eventGallery5 from "../../../assets/event-gallery5.jpg";
import cir3 from "../../../assets/cir3.png";
import cir4 from "../../../assets/cir4.png";
import thumb1 from "../../../assets/thumb1.png";
import icon15 from "../../../assets/icon15.png";
import icon16 from "../../../assets/icon16.png";
import icon17 from "../../../assets/icon17.png";

const EventContent = () => {
  return (
    <section className="event-content py-10">
      <div className="container mx-auto flex gap-[40px]">
        <div className="content flex-[0_0_75%]">
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
            Activities Involved
          </h2>
          <ul>
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
          <div className="grid grid-cols-3 justify-between my-[30px] gap-[30px]">
            <div className="box">
              <span className="w-[50px] h-[50px] rounded-full font-bold text-[36px] text-center mb-[7px] bg-[linear-gradient(180deg,#fdc830,#f37335)] inline-block text-white">
                1
              </span>
              <h3 className="text-[var(--text-color)] text-[18px] font-medium mb-1">
                Program opening
              </h3>
              <p className="text-[var(--gray-color)] text-[14px] leading-[24px] mb-5">
                Nunc at tincidunt nisl. Nullam fringilla quis odio vitae
                eleifend. Quisque sed mi
              </p>
            </div>
            <div className="box">
              <span className="w-[50px] h-[50px] rounded-full font-bold text-[36px] text-center mb-[7px] bg-[linear-gradient(180deg,#fdc830,#f37335)] inline-block text-white">
                2
              </span>
              <h3 className="text-[var(--text-color)] text-[18px] font-medium mb-1">
                Dance and have fun
              </h3>
              <p className="text-[var(--gray-color)] text-[14px] leading-[24px] mb-5">
                Nunc at tincidunt nisl. Nullam fringilla quis odio vitae
                eleifend. Quisque sed mi
              </p>
            </div>
            <div className="box">
              <span className="w-[50px] h-[50px] rounded-full font-bold text-[36px] text-center mb-[7px] bg-[linear-gradient(180deg,#fdc830,#f37335)] inline-block text-white">
                3
              </span>
              <h3 className="text-[var(--text-color)] text-[18px] font-medium mb-1">
                Program ending
              </h3>
              <p className="text-[var(--gray-color)] text-[14px] leading-[24px] mb-5">
                Nunc at tincidunt nisl. Nullam fringilla quis odio vitae
                eleifend. Quisque sed mi
              </p>
            </div>
          </div>
          <iframe
            className="w-full h-[300px]"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="cards flex-[0_0_25%]">
          <div className="card p-[47px_20px_50px] rounded-[20px] border-[2px] border-[#f9b493] mb-[30px]">
            <div className="flex items-center mb-[25px]">
              <img src={cir3} alt="Location" />
              <span className="pl-4 text-[--var(text-color)] text-lg leading-[20px]">
                43 castle road 517 district
              </span>
            </div>
            <div className="flex mb-[25px]">
              <img src={cir4} alt="Time" />
              <div className="text pl-4">
                <span className="text-[--var(text-color)] text-lg leading-[20px] block">
                  29/07/2020
                </span>
                <span className="text-[#155799] text-lg leading-[20px] mt-1.5 font-medium block">
                  11AM to 3PM
                </span>
              </div>
            </div>
            <div className="flex mb-[50px] items-center">
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
            <div className="flex mb-[50px] items-center">
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

export default EventContent;
