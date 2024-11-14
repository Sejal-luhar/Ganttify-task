import React from "react";

const Homepage = () => {
  return (
    <div className="w-full bg-gradient-to-b pt-20 from-gray-900 to-black text-white">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20 py-10 md:py-16">
        {/* Left Side Content */}
        <div className="max-w-full md:max-w-lg space-y-6">
          <button className="bg-gray-700 border-2 border-gray-600 text-sm px-3 py-1 rounded-md">
            Goals & Reporting
          </button>
          <h1 className="text-3xl md:text-6xl  md:leading-tight font-semibold">
            Goals and Reporting In One Place
          </h1>
          <p className="text-gray-400">
            Connect every team’s work to company objectives, then track progress
            with real-time data.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200">
              Get Started
            </button>
            <button className="bg-gray-800 border-2 border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-700">
              How it Works
            </button>
          </div>
          <p className="text-sm text-gray-400">Trusted by 2 million+ teams</p>
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <div className="flex gap-1 items-center text-gray-500 font-semibold">
            <img
                src="./public/download.png"
                alt="f"
                className="h-4  bg-gray-400  rounded-full"
              />
              <p>Mailchimp</p>
            </div>
            <div className="flex gap-1 items-center text-gray-500 font-semibold">
            <i className="ri-medium-fill"></i>
           
              <p>Medium</p>
            </div>
            <div className="flex gap-1 items-center text-gray-500 font-semibold">
              <i className="ri-evernote-fill"></i>
              <p>Microsoft</p>
            </div>
            <div className="flex gap-1 items-center text-gray-500 font-semibold">
              <i className="ri-dropbox-fill"></i>
              <p>Upwork</p>
            </div>
          </div>
        </div>

        {/* Right Side Stats Cards */}
        <div className="mt-10 md:mt-0 md:flex-shrink flex flex-col space-y-6 relative">
          <button className="bg-gray-600 text-gray-400 shadow rounded-2xl py-2 px-3 w-14 absolute top-0 left-24 md:left-36 opacity-80 rotate-45 text-2xl md:text-3xl">
            <i className="ri-alarm-fill"></i>
          </button>

          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-5 items-end">
            <div className="bg-blue-50 w-full md:w-[40%] px-4 py-2 rounded-lg shadow-lg">
              <div className="bg-white px-3 py-2 mb-2 rounded-xl">
                <p className="text-white bg-purple-600 rounded mb-1 w-6 px-1">
                  <i className="ri-eye-fill"></i>
                </p>
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  5,089
                </p>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">Viewers</p>
                  <p className="text-xs text-gray-500">+12.3%</p>
                </div>
              </div>
              <div className="bg-white px-3 py-2 rounded-xl">
                <p className="text-white bg-purple-600 rounded mb-2 w-6 px-1">
                  <i className="ri-bar-chart-2-fill"></i>
                </p>
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  89.90%
                </p>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">Conversions</p>
                  <p className="text-xs text-gray-500">+10%</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-64">
              <p className="text-sm mb-2 text-gray-500">Spending per month</p>
              <p className="text-xl mb-10 font-bold text-gray-800">$4,567</p>
              <div className="w-full bg-[url('./public/home-graph.jpg')] relative mt-2">
                <button className="px-1 py-1 rounded-xl text-green-700 text-xs absolute top-0 right-4 md:right-12 bg-black">
                  This month <span className="text-white">7692</span>
                </button>
                <img
                  src="./public/vector3.png"
                  alt="vector"
                  className="w-full object-contain"
                />
                <img
                  src="./public/vector4.png"
                  alt="vector"
                  className="w-full object-contain"
                />
                <button className="px-1 py-1 rounded-xl text-green-700 text-xs absolute top-12 md:top-16 right-1 md:right-2 bg-black">
                  Last month <span className="text-white">7692</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white px-4 md:px-6 py-2 rounded-xl mx-auto shadow-lg w-full md:w-[80%]">
            <div className="flex items-center gap-1 mb-2">
              <div className="h-2 w-2 rounded-full bg-red-300"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-300"></div>
              <div className="h-2 w-2 rounded-full bg-green-300"></div>
            </div>
            <div className="flex justify-between bg-blue-50 p-3 rounded-xl mb-2">
              <p className="text-xs text-black font-semibold">
                🚀 Users newly onboarded
              </p>
              <p className="text-xs text-gray-400">2 days ago</p>
            </div>
            <div className="flex justify-between bg-blue-50 p-3 mb-3 rounded-xl">
              <p className="text-xs text-black font-semibold">
                💰 Made a purchase
              </p>
              <p className="text-xs text-gray-400">5 days ago</p>
            </div>
          </div>

          <button className="bg-gray-600 text-gray-400 shadow rounded-2xl py-2 px-3 w-14 absolute bottom-2 left-0 md:-left-7 opacity-80 -rotate-12 text-2xl md:text-3xl">
            <i className="ri-quote-text"></i>
          </button>
          <button className="bg-gray-600 text-gray-400 shadow rounded-2xl py-2 px-3 w-14 absolute bottom-0 right-0 md:-right-6 opacity-80 rotate-12 text-2xl md:text-3xl">
            <i className="ri-calendar-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
