import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[100%] fixed bg-white shadow-lg">
      <div className="w-full  mx-auto flex justify-between items-center py-5 px-6 ">
        {/* Left Side: Logo and Company Name */}
        <div className="flex justify-between items-center gap-10">
          <div className="flex items-center ">
            <img
              src="./public/homeicon.png" // Replace with your logo path
              alt="Company Logo"
              className="h-6 w-6 absolute  rotate-180"
            />
            <span className=" font-semibold ml-8 text-gray-800">Ganttify</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#products"
              className="text-black text-xs font-semibold hover:text-gray-900"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="text-black text-xs font-semibold hover:text-gray-900"
            >
              Solutions
            </a>
            <a
              href="#resources"
              className="text-black text-xs font-semibold hover:text-gray-900"
            >
              Resources
            </a>
            <a
              href="#company"
              className="text-black text-xs font-semibold hover:text-gray-900"
            >
              Company
            </a>
            <a
              href="#pricing"
              className="text-black text-xs font-semibold hover:text-gray-900"
            >
              Pricing
            </a>
          </div>
        </div>
        {/* Right Side: Sign In and Get Started Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#signin"
            className="text-black text-sm font-semibold border-2 border-gray-300 px-4 py-2 rounded-xl hover:text-gray-900"
          >
            Sign In
          </a>
          <a
            href="#getstarted"
            className="bg-black text-sm font-semibold text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
