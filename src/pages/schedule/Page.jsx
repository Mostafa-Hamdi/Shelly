import React from "react";
// import { button } from "react-router-dom";

const Schedule = () => {
  const handleActive = (e) => {
    document.querySelectorAll(".links button").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  return (
    <section className="schedule py-[100px]">
      <div className="container mx-auto">
        <div className="links flex justify-center flex-wrap gap-[30px]">
          <button
            className="active one text-[var(--text-color)] text-[18px] h-[46px] border-[1px] border-[#dbdbdb] rounded-[30px] px-[37px] flex items-center "
            onClick={handleActive}
          >
            1th Grade
          </button>
          <button
            className="two text-[var(--text-color)] text-[18px] h-[46px] border-[1px] border-[#dbdbdb] rounded-[30px] px-[37px] flex items-center"
            onClick={handleActive}
          >
            2th Grade
          </button>
          <button
            className="three text-[var(--text-color)] text-[18px] h-[46px] border-[1px] border-[#dbdbdb] rounded-[30px] px-[37px] flex items-center"
            onClick={handleActive}
          >
            3th Grade
          </button>
          <button
            className="four text-[var(--text-color)] text-[18px] h-[46px] border-[1px] border-[#dbdbdb] rounded-[30px] px-[37px] flex items-center"
            onClick={handleActive}
          >
            4th Grade
          </button>
        </div>
        <div className="table-responsive">
          <table className="one">
            <thead>
              <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thrusday</th>
                <th>Friday</th>
                <th>Satuarday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="orange">
                  <a href="">Charcoal Drawing for all age students</a>8 AM - 10
                  AM
                </td>
                <td></td>
                <td className="orange">
                  <a href="">Your Complete Guide to Photography​</a>8 AM - 10 AM
                </td>
                <td></td>
                <td className="orange">
                  <a href="">Basic English Speaking and Grammar</a> 8 AM - 10 AM
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="" className="orange">
                    Introduction to LearnPress LMS Plugin
                  </a>
                  10 AM - 12 AM
                </td>
                <td></td>
                <td className="green">
                  <a href="">Your Complete Guide to Photography​</a>
                  10 AM - 12 AM
                </td>
                <td></td>
                <td></td>
                <td className="green">
                  <a href="">Natural Sciences & Mathematics Courses</a>
                  10 AM - 12 AM
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="orange">
                  <a href="">Natural Sciences & Mathematics Courses</a> 12 AM -
                  14 AM
                </td>
                <td></td>
                <td className="orange">
                  <a href="">Learn Python – Interactive Python</a>12 AM - 14 AM
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="green">
                  <a href="">
                    Basic English Speaking and Gram mar 14 PM - 16 AM Tuesday
                    Introduction to LearnPress LMS Plugin
                  </a>
                  10 AM - 12 AM
                </td>
                <td></td>
                <td></td>
                <td className="green">
                  <a href="">Your Complete Guide to Photography​</a> 14 AM - 16
                  AM
                </td>
                <td></td>
                <td className="green">
                  <a href="">Natural Sciences & Mathematics Courses</a>14 AM -
                  16 AM
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="green">
                  <a href="">Your Complete Guide to Photography​</a>
                  16 AM - 17 AM
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td className="orange">
                  <a href="">Basic English Speaking and Grammar</a>16 AM - 17 AM
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
