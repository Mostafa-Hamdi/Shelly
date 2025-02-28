import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);

  // Effect to update pathName when location changes
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  // Effect to toggle header classes based on pathName
  useEffect(() => {
    const header = document.querySelector(".header-container");
    if (header) {
      if (pathName !== "/") {
        header.classList.remove("absolute");
        header.classList.add("relative");
      }
    }
  }, [pathName]);

  return (
    <div className="header-container absolute w-full z-50">
      <header>
        <div className="container mx-auto py-[25px] flex justify-between items-center">
          <div className="logo flex-[0_0_33%]">
            <img src={logo} alt="logo" />
          </div>
          <div className="main-info flex-[0_0_67%] items-center hidden lg:flex">
            <div className="call flex-[0_0_33%] flex h-[45px]">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[21px] mr-2.5 mt-2"
              >
                <path
                  d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"
                  fill="#f37335"
                />
              </svg>
              <div className="text">
                <h5 className="text-[15px] font-semibold mb-[5px] text-[var(--text-color)] h-5">
                  Call
                </h5>
                <span className="text-[14px] text-[var(--gray-color)]">
                  +2 342 5446 67
                </span>
              </div>
            </div>
            <div className="work-time flex-[0_0_33%] flex h-[45px]">
              <svg
                className="feather feather-clock h-[21px] w-[21px] mr-2.5 mt-2"
                fill="none"
                height="24"
                stroke="#f37335"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="text">
                <h5 className="text-[15px] font-semibold mb-[5px] text-[var(--text-color)] h-5">
                  Work Time
                </h5>
                <span className="text-[14px] text-[var(--gray-color)]">
                  Mon - Fri 8 AM - 5 PM
                </span>
              </div>
            </div>
            <div className="address flex-[0_0_33%] flex h-[45px]">
              <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[21px] mr-2.5 mt-2"
              >
                <path
                  d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  fill="#f37335"
                />
                <path d="M0 0h48v48H0z" fill="none" />
              </svg>
              <div className="text">
                <h5 className="text-[15px] font-semibold mb-[5px] text-[var(--text-color)] h-5">
                  Address
                </h5>
                <span className="text-[14px] text-[var(--gray-color)]">
                  Franklin St, Greenpoint Ave
                </span>
              </div>
            </div>
          </div>
          <div
            className="toggle-menu"
            onClick={(e) => {
              setMenuIsOpen(!menuIsOpen);
              e.target.classList.toggle("open");
            }}
            aria-expanded={menuIsOpen}
            aria-label="Toggle menu"
          >
            <div></div>
          </div>
        </div>
      </header>
      <Nav isOpen={menuIsOpen} />
    </div>
  );
};

export default Header;
