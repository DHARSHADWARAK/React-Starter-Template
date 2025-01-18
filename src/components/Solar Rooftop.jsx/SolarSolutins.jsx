import React from "react";
import capexImage from "../../assets/solns.jpg"; // Replace with actual image paths
import opexImage from "../../assets/solns.jpg"; // Replace with actual image paths
import capexIcon from "../../assets/solns.jpg"; // Replace with actual icon paths
import opexIcon from "../../assets/solns.jpg"; // Replace with actual icon paths

const solutions = [
  {
    id: 1,
    title: "CAPEX",
    description: [
      "Complete Ownership of the Solar Plant",
      "Accelerated Depreciation Benefits",
      "Input GST Credit",
      "4-5 year Payback, High IRR and returns",
      "Plant Monitoring and Analytics",
    ],
    icon: capexIcon,
    image: capexImage,
  },
  {
    id: 2,
    title: "OPEX/RESCO",
    description: [
      "AVCO Owns the Solar Plant",
      "Zero Investment required",
      "Yearly Savings",
      "Zero O&M",
      "PPA Agreement with AVCO",
    ],
    icon: opexIcon,
    image: opexImage,
  },
];

const SolarSolutions = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
            SOLAR POWER <span className="text-blue-900">SOLUTIONS</span>
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto my-4"></div>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-12 items-center">
          {/* Left Side: Image + Description */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-80">
            <div className="flex justify-center items-center">
              <img
                src={solutions[0].image}
                alt={solutions[0].title}
                className="w-full max-w-md rounded-md shadow-lg animate-slide-left"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <div className="flex items-center mb-4">
                {/* <img
                  src={solutions[0].icon}
                  alt={solutions[0].title}
                  className="w-8 h-8 mr-4"
                /> */}
                <h3 className="text-xl font-bold text-blue-900 animate-[fade-in_1s_ease-in]">
                {solutions[0].title}
                </h3>
              </div>
              <ul className="space-y-2 pl-4">
                {solutions[0].description.map((point, idx) => (
                  <li
                    key={idx}
                    className="list-disc text-gray-600 text-sm sm:text-base animate-[fade-in_1s_ease-in]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Image + Description */}
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-96">
            <div className="flex justify-center items-center">
              <img
                src={solutions[1].image}
                alt={solutions[1].title}
                className="w-full max-w-md rounded-md shadow-lg animate-slide-right"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <div className="flex items-center mb-4">
                {/* <img
                  src={solutions[1].icon}
                  alt={solutions[1].title}
                  className="w-8 h-8 mr-4"
                /> */}
                <h3 className="text-xl font-bold text-blue-900 animate-[fade-in_1s_ease-in]">
                  {solutions[1].title}
                </h3>
              </div>
              <ul className="space-y-2 pl-4">
                {solutions[1].description.map((point, idx) => (
                  <li
                    key={idx}
                    className="list-disc text-gray-600 text-sm sm:text-base animate-[fade-in_1s_ease-in]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSolutions;
