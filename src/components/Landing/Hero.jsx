import React from "react";
import bgImg from "../../assets/250db34bb5a9b10ac8bf089078cf3d98.jpeg"
const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-screen bg-cover bg-center font-sans " style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container  relative z-10 h-full flex flex-col justify-center items-start px-6 text-white ">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fade-left">
          Harnessing the Power of <br /> <span className="text-green-500 ">Nature</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-white hover:bg-[#00bf63] animate-fade-right text-[#00bf63] hover:text-white font-semibold rounded-lg shadow-md transition duration-300">
  Learn More
</button>

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

export default HeroSection;
