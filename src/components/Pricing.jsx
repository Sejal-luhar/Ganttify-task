import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-10 md:px-36 md:py-16">
      {/* Header */}
      <div className="flex items-center bg-gray-700 rounded-xl px-3 py-1 w-fit mb-8">
        <i className="ri-archive-2-line"></i>
        <p className="ml-2">Pricing</p>
      </div>

      {/* Title and Toggle */}
      <div className="flex flex-wrap md:flex-nowrap justify-between md:justify-between md:items-center mb-8 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 md:mt-5 md:w-[40%]">
          Simple and Flexible Pricing
        </h2>
        <div className="mt-4 flex items-center justify-center space-x-4 flex-wrap md:flex-nowrap">
          <button className="px-4 py-2 text-sm rounded-lg font-semibold bg-white text-black">
            Monthly
          </button>
          <button className="px-4 py-2 text-sm rounded-lg bg-gray-900 border border-gray-700 text-white">
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
        {/* Personal Plan */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-gray-500 rounded-xl p-6 w-full md:w-72 shadow-lg">
          <h3 className="text-sm font-semibold mb-4">Personal</h3>
          <p className="text-3xl text-white font-semibold mb-2">
            $29
            <span className="text-base font-normal"> / month</span>
          </p>
          <p className="text-gray-400 text-sm mb-6">
            For individuals and small teams looking to manage their tasks.
          </p>
          <p className="text-white mb-3 border-t border-gray-500 border-dashed pt-5">
            This plan includes:
          </p>
          <ul className="text-sm mb-6 space-y-4">
            <li>
              <i className="ri-checkbox-circle-fill"></i> Unlimited contacts
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Bulk emailing
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> AI Integration
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> View & share up to 3
              years
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Collaboration &
              permissions
            </li>
          </ul>
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl border border-gray-500">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white text-black rounded-xl p-6 w-full md:w-72 shadow-lg">
          <h3 className="text-sm text-gray-500 font-semibold mb-4">Pro</h3>
          <p className="text-3xl font-bold mb-2">
            $39
            <span className="text-gray-500 text-sm font-normal">
              {" "}
              per month
            </span>
          </p>
          <p className="text-gray-500 text-sm mb-6">
            For growing teams that need to track their projects' progress and
            hit deadlines.
          </p>
          <p className="text-black mb-3 border-t border-gray-400 border-dashed pt-4">
            Everything in Standard, plus:
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>
              <i className="ri-checkbox-circle-fill"></i> Email sequences
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Send emails from
              multiple domains
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Connect multiple email
              accounts
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Fully adjustable
              sharing permissions
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Migration services
            </li>
          </ul>
          <button className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-2xl">
            Get Started
          </button>
        </div>

        {/* Custom Plan */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 text-gray-500 rounded-xl p-6 w-full md:w-72 shadow-lg">
          <h3 className="text-sm font-semibold mb-3">Beyond Limits</h3>
          <p className="text-3xl text-white font-semibold mb-3">Custom Plan</p>
          <p className="text-gray-400 text-sm mb-6">
            For companies that need to manage a portfolio of work and goals
            across departments.
          </p>
          <p className="text-white mb-3 border-t border-gray-500 border-dashed pt-5">
            Everything in Standard & Pro, plus:
          </p>
          <ul className="text-sm mb-4 space-y-2">
            <li>
              <i className="ri-checkbox-circle-fill"></i> White glove onboarding
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Custom billing
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Dedicated Slack
              channel
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Dedicated point of
              contact
            </li>
            <li>
              <i className="ri-checkbox-circle-fill"></i> Unlimited reporting
            </li>
          </ul>
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
