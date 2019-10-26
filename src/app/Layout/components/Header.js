import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex z-100 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-20 py-20">
        <div className="flex justify-between items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center">
              <div className="sm:block hidden">
                <a
                  href="/"
                  className="flex flex-col lg:mr-4 text-white text-4xl"
                >
                  CRA Tailwindcss
                  <span className="w-20 h-4 bg-primary-main my-2"></span>
                </a>
              </div>
              <div className="sm:hidden">
                <a
                  href="/"
                  className="flex flex-col lg:mr-4 text-white text-4xl"
                >
                  CT
                  <span className="lg:w-20 md:w-8 h-4 bg-primary-main my-2"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link
              to="/"
              className="block px-6 text-white hover:text-primary-main"
            >
              Home
            </Link>
            <Link
              to="/pages/carview"
              className="block px-6 text-white hover:text-primary-main"
            >
              Link1
            </Link>
            <Link
              to="/pages/carlist"
              className="block px-6 text-white hover:text-primary-main"
            >
              Link2
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
