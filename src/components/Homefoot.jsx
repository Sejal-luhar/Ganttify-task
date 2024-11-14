import React from "react";

const Homefoot = () => {
  return (
    <div className="h-20vh py-10 pb-20">
      <p className="text-center text-gray-500 font-semibold mb-12 ">
        Trusted by 2 million teams
      </p>
      <div className="flex items-center flex-wrap justify-evenly">
        <div className="flex gap-1 items-center text-gray-500 font-semibold">
          <i class="ri-medium-fill"></i>
          <p>Medium</p>
        </div>
        <div className="flex gap-1 items-center text-gray-500 font-semibold">
          <img
            src="./public/mailchimp.png"
            alt=""
            className="h-4"
          />
          <p>Mailchimp</p>
        </div>
        <div className="flex gap-1 items-center text-gray-500 font-semibold">
          <i class="ri-evernote-fill"></i>
          <p>Evernote</p>
        </div>
        <div className="flex gap-1 items-center text-gray-500 font-semibold">
          <i class="ri-dropbox-fill"></i>
          <p>Dropbox</p>
        </div>
        <div className="flex gap-1 items-center text-gray-500 font-semibold">
          <i className="ri-windows-fill"></i>
          <p>Microsoft</p>
        </div>
      </div>
    </div>
  );
};

export default Homefoot;
