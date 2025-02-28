import React from "react";
import ContactCard from "./ContactCard";
import icon15 from "../../../assets/icon15.png";
import icon16 from "../../../assets/icon16.png";
import icon17 from "../../../assets/icon17.png";
const AddComment = () => {
  return (
    <section className="add-comment py-10">
      <div className="container mx-auto md:flex gap-[30px]">
        <div className="contact-form flex-[0_0_64%] mb-5 md:mb-0">
          <h2 className="text-[36px] text-[var(--text-color)] capitalize font-medium mb-6">
            Add Comment
          </h2>
          <form action="">
            <div className="md:grid grid-cols-2 gap-[30px] mb-[20px]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input mb-5 md:mb-0"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
              />
            </div>
            <textarea
              name="message"
              id=""
              placeholder="Message"
              className="form-input mb-[30px]"
            ></textarea>
            <a href="" className="main-btn relative ">
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
              send now
            </a>
          </form>
        </div>
        <div className="contact-info flex-[0_0_34%]">
          <h2 className="text-[36px] text-[var(--text-color)] capitalize font-medium mb-6">
            Our Contacts
          </h2>
          <div className="grid grid-cols-2 md:block gap-[30px]">
            <ContactCard img={icon15} heading="Call" data="+2 342 5446 67" />
            <ContactCard
              img={icon16}
              heading="Work Time"
              data="Mon - Fri 8 AM - 5 PM
"
            />
            <ContactCard
              img={icon17}
              heading="address"
              data="Franklin St, Greenpoint Ave"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddComment;
