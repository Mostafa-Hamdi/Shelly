import React from "react";
import tech1 from "../../assets/tech1.jpg";
import icon15 from "../../assets/icon15.png";
import ro2 from "../../assets/ro2.png";
import ro3 from "../../assets/ro3.png";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="content py-10">
      <div className="container mx-auto lg:flex justify-between gap-[50px]">
        <div className="image lg:flex-[0_0_30%]">
          <img src={tech1} alt="" />
        </div>
        <div className="details lg:flex-[0_0_70%]">
          <h5 className="text-[20px] text-[var(--orange-color)] italic mb-[5px]">
            Instructor
          </h5>
          <div className="flex flex-wrap gap-[0px_100px] items-center mt-[30px]">
            <div class="flex mb-[30px] items-center">
              <img src={icon15} alt="Speaker" />
              <div class="text pl-4">
                <span class="text-[--var(text-color)] text-[16px] leading-[20px] block mb-1.5">
                  Call
                </span>
                <span class="text-[var(--gray-color)] text-[14px] leading-[20px] block">
                  +2 342 5446 67
                </span>
              </div>
            </div>
            <div class="flex mb-[30px] items-center">
              <img src={ro2} alt="Speaker" />
              <div class="text pl-4">
                <span class="text-[--var(text-color)] text-[16px] leading-[20px] block mb-1.5">
                  Email
                </span>
                <span class="text-[var(--gray-color)] text-[14px] leading-[20px] block">
                  name@domain.com
                </span>
              </div>
            </div>
            <div class="flex mb-[30px] items-center">
              <img src={ro3} alt="Speaker" />
              <div class="text pl-4">
                <span class="text-[--var(text-color)] text-[18px] leading-[20px] block mb-1.5">
                  Call Teacher <br /> Now
                </span>
              </div>
            </div>
          </div>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px] max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In
            sagittis lacinia lorem et tristique. Quisque mauris neque,
            sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In
            vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur
            vitae sapien vel lectus sagittis consequat. Nullam enim velit,
            dignissim vel viverra ac, eleifend ut tellus.
          </p>
          <div className="card border-[1px] border-[#e9723a] max-w-[460px] rounded-[20px] p-10 mb-6 bg-error">
            <div className="flex gap-[100px] mb-4">
              <span className="text-[14px] text-[var(--gray-color)]">DOB</span>
              <span className="text-[14px] text-[#155799] font-bold italic">
                15.03.1987
              </span>
            </div>
            <div className="flex gap-[68px] mb-4">
              <span className="text-[14px] text-[var(--gray-color)]">
                Education
              </span>
              <span className="text-[14px] text-[#155799] font-bold italic">
                Music School of Music Arts
              </span>
            </div>
            <div className="flex gap-[62px] mb-4">
              <span className="text-[14px] text-[var(--gray-color)]">
                Experience
              </span>
              <span className="text-[14px] text-[#155799] font-bold italic">
                10 years
              </span>
            </div>
          </div>
          <h2 className="text-[20px] text-[var(--text-color)] font-medium mb-4">
            Personal Skills
          </h2>
          <div>
            <div className="max-w-[600px] mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium mb-2 text-[var(--text-color)]">
                  Teaching
                </span>
                <span className="text-[var(--gray-color)] text-[14px]">
                  100%
                </span>
              </div>
              <div className="progress relative h-5 bg-[#eee] rounded-[10px]">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-[#f45905] rounded-[10px]"
                />
              </div>
            </div>
            <div className="max-w-[600px] mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium mb-2 text-[var(--text-color)]">
                  Speaking
                </span>
                <span className="text-[var(--gray-color)] text-[14px]">
                  80%
                </span>
              </div>
              <div className="progress relative h-5 bg-[#eee] rounded-[10px]">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-[#155799] rounded-[10px]"
                />
              </div>
            </div>
            <div className="max-w-[600px] mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium mb-2 text-[var(--text-color)]">
                  Family Support
                </span>
                <span className="text-[var(--gray-color)] text-[14px]">
                  85%
                </span>
              </div>
              <div className="progress relative h-5 bg-[#eee] rounded-[10px]">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-[#fdc830] rounded-[10px]"
                />
              </div>
            </div>
            <div className="max-w-[600px] mb-[30px]">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium mb-2 text-[var(--text-color)]">
                  Children's Well-being
                </span>
                <span className="text-[var(--gray-color)] text-[14px]">
                  90%
                </span>
              </div>
              <div className="progress relative h-5 bg-[#eee] rounded-[10px]">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-[#159957] rounded-[10px]"
                />
              </div>
            </div>
          </div>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px] max-w-[600px]">
            Quisque congue ultrices nibh, id consectetur velit consectetur ut.
            Suspendisse porttitor vulputate imperdiet. Proin rhoncus, mauris sit
            amet consectetur laoreet, mauris mi volutpat urna, at molestie urna
            libero quis leo. Pellentesque ut molestie nisi. Suspendisse ut nulla
            eleifend ligula vulputate tincidunt sed eget orci.
          </p>
          <p className="text-[14px] text-[var(--gray-color)] mb-5 leading-[24px] max-w-[600px]">
            Pellentesque aliquam varius malesuada. Proin id massa vitae eros
            elementum egestas id sit amet elit. Praesent convallis ligula ac
            urna rhoncus euismod. Vestibulum maximus luctus magna, in
            sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh
            luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis
            ante. Fusce non iaculis sem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
