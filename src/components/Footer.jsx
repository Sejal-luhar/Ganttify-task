import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        
      {/* Footer Section */}
      <section className="w-full  bg-black text-gray-200 px-20 py-20">
          {/* Footer Top */}
          <div className=" flex items-center md:flex-wrap mb-10 justify-between">
            <div className="flex items-center space-x-8 relative">
              <i className="ri-box-2-line absolute rotate-180 text-2xl"></i>
              <p>Ganttify</p>
            </div>
            <div className="flex space-x-4 mb-12 text-gray-400">
              <a href="#" className="hover:text-white"><i className="ri-facebook-line"></i></a>
              <a href="#" className="hover:text-white"><i className="ri-twitter-line"></i></a>
              <a href="#" className="hover:text-white"><i className="ri-instagram-line"></i></a>
              <a href="#" className="hover:text-white"><i className="ri-linkedin-line"></i></a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="w-full  grid grid-cols-2 md:grid-cols-5 mb-20 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Ganttify</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Customer Success</li>
                <li>Templates</li>
                <li>Trust & Security</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Project Management</li>
                <li>Goal Management</li>
                <li>Agile Management</li>
                <li>Task Management</li>
                <li>Productivity</li>
                <li>Work Management</li>
                <li>Project Planning</li>
                <li>To Do Lists</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">About Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Company</li>
                <li>Leadership</li>
                <li>Customers</li>
                <li>Careers</li>
                <li>Changelog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Developers & API</li>
                <li>Community</li>
                <li>Events</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Helpful Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Legal Center</li>
                <li>Privacy Policy</li>
                <li>Partnerships</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex md:flex-wrap items-center justify-between pt-10 border-t border-gray-600 mt-4">
            <div className="flex items-center space-x-2">
              <i className="ri-earth-line "></i>
              <p>United States</p>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <p className="text-gray-500">©Ganttify 2024, All Rights Reserved</p>
          </div>
      </section>
    </div>
  )
}

export default Footer