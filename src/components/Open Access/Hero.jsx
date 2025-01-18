import React from "react";
import bgImage from "../../assets/landing_sec_bg.jpeg"; // Replace with your background image path

const Hero = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById("next-section-about");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 via-lime-400 to-green-400 opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start text-left px-10">
        <div className="text-white max-w-7xl">
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold animate-slide-down">
              Our journey at <span className="font-semibold">AVCO</span> has
              been of pure commitment, innovation, and partnership. We firmly
              believe in the advantages and offerings of distributed solar
              services, and our team is extremely passionate about delivering
              the best in-class solar power plant services for our clients.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 animate-fade-down" onClick={scrollToNextSection}>
        <svg
          className="w-6 h-6 text-white animate-bounce cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
