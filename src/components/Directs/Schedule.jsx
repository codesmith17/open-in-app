import React from "react";
import Sidebar from "../Sidebar";
import "../style.css";
import Logocompany from "../Login/Logocompany";
import { useState, useEffect } from "react";
const Dashboard1 = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbarOnOutsideClick = (event) => {
    if (isNavbarVisible && !event.target.closest(".header")) {
      setIsNavbarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeNavbarOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeNavbarOnOutsideClick);
    };
  }, [isNavbarVisible]);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
        `}
      </style>

      <div className="relative">
        <div className="header flex items-center">
          <div
            className="mobile-navbar-button ml-3 lg:hidden w-8 h-8 cursor-pointer"
            onClick={toggleNavbar}
          >
            ☰
          </div>
          <div className="my-3 mx-3">
            <Logocompany />
          </div>
        </div>

        {/* Always show the Sidebar on PCs */}
        <div
          className={`${
            isNavbarVisible
              ? "block lg:block fixed top-14 left-0 h-screen fadeIn"
              : "hidden lg:block fixed top-14 left-0 h-screen"
          }`}
        >
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="lg:ml-40">
          <div className="bg-[#fafafb] p-8">
            <h1 className="text-2xl font-bold">THE SCHEDULE PAGE</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
