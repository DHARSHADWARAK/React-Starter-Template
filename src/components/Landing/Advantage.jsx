import React from "react";
import indiaMap from "../../assets/adv.png"; // Replace with your map image path

const advantages = [
  {
    title: "PAN INDIA PRESENCE",
    description:
      "Our strong presence across India greatly helps us with on-time service, local liaisoning, and efficient project management activities.",
  },
  {
    title: "48 HOUR SERVICE GUARANTEE",
    description:
      "Dedicated and in-house O&M team with constant remote monitoring to ensure maximum generation and output across all power plants.",
  },
  {
    title: "EXPERIENCED PROJECT EXECUTION",
    description:
      "Strong and dedicated project execution team, with a focus on quality and performance.",
  },
  {
    title: "END-TO-END SOLUTIONS",
    description:
      "Our end-to-end EPC solutions focus on offering design, engineering, and O&M for solar projects across the commercial, industrial, residential, and institutional sectors.",
  },
];

const Advantage = () => {
  return (
<section className=" bg-gradient-to-br from-green-400 via-lime-400 to-cyan-200 py-16 pb-32">
<div className="container flex flex-col md:flex-row items-center justify-between  px-6 lg:flex lg:items-center lg:gap-16">
        {/* Map Section */}
        <div className="relative w-full  ">
          <img src={indiaMap} alt="India Map" className="w-full -mt-96 animate-fade-scale" />
          {/* Map Markers */}
         
        </div>

        {/* Advantage Details */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 text-left animate-slide-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D4DD7]">
            <span className="text-[#00bf63]">AVCO</span>{" "}
            <span className="text-[#1D4DD7]">ADVANTAGE</span>
          </h2>
          <div className="w-16 h-1 bg-[#1D4DD7] my-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-blue-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
