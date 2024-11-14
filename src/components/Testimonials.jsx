import React from "react";

const testimonials = [
  {
    name: "Charolette Hanlin",
    position: "Co-Founder, Heroes Digital",
    text: "Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.",
    rating: 4.8,
    image:
      "./public/img1.avif",
  },
  {
    name: "Eleanor Pena",
    position: "Co-Founder, Heroes Digital",
    text: "Using Ganttify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company’s strategic goals.",
    rating: 4.8,
    image:
      "./public/img2.avif",
  },
  {
    name: "Guy Hawkins",
    position: "Co-Founder, Heroes Digital",
    text: "Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.",
    rating: 4.8,
    image:
      "./public/img3.avif",
  },
  {
    name: "Kristin Watson",
    position: "Co-Founder, Heroes Digital",
    text: "Ganttify’s ability to connect tasks with our company’s goals has given us a new level of clarity and efficiency in our project management efforts.",
    rating: 4.8,
    image:
      "./public/img4.avif",
  },
  {
    name: "Jane Cooper",
    position: "Co-Founder, Heroes Digital",
    text: "Using Ganttify, we’ve been able to ensure that all our project activities are aligned with our overarching business objectives, leading to better coordination and success.",
    rating: 4.8,
    image:
      "./public/img5.avif",
  },
  {
    name: "Leslie Alexander",
    position: "Co-Founder, Heroes Digital",
    text: "Ganttify has transformed our approach to project management. It ensures that every task, no matter how small, is aligned with our company’s mission and goals.",
    rating: 4.8,
    image:
      "./public/img6.avif",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4">
      {/* Header */}

      <div className="text-center mb-12">
        <p className="w-[110px] mb-4 text-gray-500 text-sm flex gap-2 mx-auto border border-gray-400 rounded-xl px-2 py-1">
          <i class="ri-user-3-line"></i>Customers
        </p>
        <h2 className="w-[70%] mx-auto text-4xl font-bold">
          See What Our Customers Are Saying
        </h2>
        <p className="text-gray-500 text-sm  mt-4 mb-6">
          Here’s what some of our customers say about our platform.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-14">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200"
          >
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-blue-600">
                {"★".repeat(5)} {/* Display 5 stars */}
              </div>
              <span className="ml-2 text-gray-600 text-sm">
                {testimonial.rating}
              </span>
            </div>

            {/* Testimonial Text */}
            <p className="text-black text-sm text-semibold mb-6">
              “{testimonial.text}”
            </p>

            {/* User Info */}
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 object-cover rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
