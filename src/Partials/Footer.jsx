import React from "react";
import Logo from "../assets/15.svg"
const Footer = () => {
  return (
    <footer className="border-8 border-green-400 bg-gray-900 text-white">
      {/* Call-to-Action Banner */}
      <div className="absolute ml-[25vw] -mt-[28vw] md:-mt-[5vw] bg-gradient-to-r from-teal-400 to-lime-300 py-8 w-1/2 justify-center text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 animate-fade-down">
          Ready to discuss your project?
        </h2>
        <button className="bg-white text-teal-500 font-semibold px-8 py-3 rounded-full animate-fade-down shadow-md hover:bg-gray-100 transition">
          GET IN TOUCH
        </button>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-100 text-[#00bf63] pt-32   pb-12">
        <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social Links */}
          <div>
               <a href="/" className="cursor-pointer">
                   <img src={Logo} alt="AVCO Energy Logo" className="w-52 " />
                 </a>
            <div className="flex space-x-4">
              {/* Replace icons with actual paths or FontAwesome/React-Icons */}
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Floating Solar Plants <span className="ml-2">➔</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Open Access <span className="ml-2">➔</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Rooftop Solar <span className="ml-2">➔</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Solar Carport <span className="ml-2">➔</span>
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  About Avco <span className="ml-2">➔</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Case Studies <span className="ml-2">➔</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Channel Partners <span className="ml-2">➔</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Contact Us <span className="ml-2">➔</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
            <ul className="space-y-2">
              <li>033 2475 0337</li>
              <li>
                <a href="mailto:info@avcoenergy.in" className="hover:text-gray-300">
                  info@avcoenergy.in
                </a>
              </li>
              <li>2/5, Sarad Bose Road, Kolkata 700 020</li>
              <li>39, JSS Road, Kennedy Bridge, Opera House, Mumbai 400 004</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Description */}
      {/* <div className="bg-white text-blue-900 py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left">
          <p className="text-sm leading-relaxed mb-4 lg:mb-0 p-6">
            We are committed to helping organizations achieve the lowest landed costs of electricity
            and meet their sustainability goals, keeping in mind our emphasis on quality and service.
            Our team is working on providing financing solutions to adopt solar power and realize all
            the financial and environmental benefits associated with it.
          </p>
          <div className="text-red-500 text-lg font-bold">
            MAKING SOLAR <br /> AFFORDABLE AND ACCESSIBLE
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
