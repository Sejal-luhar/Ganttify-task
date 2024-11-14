import React from "react";

const ContactPage = () => {
  return (
    <div className="font-open-sans w-[100%] h-[98vh] md:h-[full]">
      {/* Contact Section */}
      <section className="w-[100%] h-full flex items-center justify-evenly bg-gradient-to-r from-black to-teal-900 p-8">
        <div className="flex w-full max-w-4xl flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Box */}
          <div className=" md:w-1/2 flex flex-col items-start text-white p-8 space-y-6  rounded-lg">
            <div className="flex items-center  gap-2 border border-gray-600 p-2 rounded-full bg-gray-700/30 w-28 justify-center">
              <i className="ri-headphone-line"></i>
              <p>Contact</p>
            </div>
            <h3 className="text-3xl font-light">Get in Touch with Us</h3>
            <p className="text-gray-400">
              Ganttify enables you to achieve clarity and significant results by
              linking tasks and workflows to company objectives.
            </p>
            <div className="flex-none flex-col space-y-4 w-full md:hidden">
              <button className="w-full py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200">
                Get Started
              </button>
              <button className="w-full py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600">
                How it Works
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div className="w-full md:w-1/2 p-8 bg-white rounded-lg md:block hidden">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="johndoe@email.com"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Problem Description
                </label>
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
