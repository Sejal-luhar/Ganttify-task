import React from "react";

const Features = () => {
  return (
    <section className="bg-white px-4 sm:px-20 py-16 text-center">
      {/* Heading */}
      <h1 className="text-gray-400 border border-gray-400 px-2  flex  py-1 rounded-xl mb-5 sm:ml-6 text-sm w-[80px]">
        <i className="ri-camera-lens-line"></i> Features
      </h1>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:ml-6 text-left">
        Everything Your Team Looking For
      </h2>
      <p className="text-gray-500 mb-14 sm:ml-6 text-left">
        Ganttly’s exceptional flexibility can handle any type of work. And we
        never stop innovating.
      </p>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
        {/* Project Management */}
        <div className="rounded-xl p-6 text-left">
          <img
            src="./public/illustration1.jpg" // Replace with actual image source
            alt="Project Management"
            className="mb-3 w-full rounded-xl object-contain object-center"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Project Management
          </h3>
          <p className="text-gray-500 text-sm">
            Manage your projects from start to finish. With all of your projects
            in Ganttly, you’ll always know who’s doing what, by when.
          </p>
        </div>

        {/* Workflows and Automations */}
        <div className="rounded-xl p-6 text-left">
          <img
            src="./public/illustration2.jpg" // Replace with actual image source
            alt="Workflows and Automations"
            className="mb-3 w-full rounded-xl object-cover object-center"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Workflows and Automations
          </h3>
          <p className="text-gray-500 text-sm">
            Create more efficient processes so you can seamlessly manage
            projects across departments and get more done in less time.
          </p>
        </div>

        {/* Goals and Reporting */}
        <div className="rounded-xl p-6 text-left">
          <img
            src="./public/illustration3.jpg" // Replace with actual image source
            alt="Goals and Reporting"
            className="mb-3 w-full rounded-xl object-cover object-center"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Goals and Reporting
          </h3>
          <p className="text-gray-500 text-sm">
            See how each project and portfolio ladders up to company objectives
            and keep everyone focused on the work that matters.
          </p>
        </div>

        {/* Resource Management */}
        <div className="rounded-xl p-6 text-left">
          <img
            src="./public/illustration4.jpg" // Replace with actual image source
            alt="Resource Management"
            className="mb-3 w-full rounded-xl object-cover object-center"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Resource Management
          </h3>
          <p className="text-gray-500 text-sm">
            Get the visibility you need to plan accurate timelines, adjust
            workloads, and stay on track to achieve your objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
