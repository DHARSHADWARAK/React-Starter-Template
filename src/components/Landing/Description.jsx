import React from "react";

const Description = () => {
  return (
    <section id="next-section" className="bg-white py-16">
      <div className="container mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-[#00bf63]">WE ARE</span> <span className="text-blue-900">AVCO</span>
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg leading-relaxed  md:px-40 opacity-0 animate-fade-up">
          Avco Energy is one of the leading pioneers of distributed solar services in India. As an
          end-to-end solution provider with in-house capabilities, we assist our clients through the
          entire process of project evaluation, design, engineering, and operation and maintenance.
          We also provide multiple financing options, such as CAPEX and RESCO, to meet the needs of
          our clients. Our reliable solutions and services are focused towards reducing energy costs
          for our customers.
        </p>

        {/* Button */}
        <button className="mt-8 px-8 py-3 border-2 border-[#00bf63] text-[#00bf63] hover:bg-[#00bf63] hover:text-white font-semibold rounded-lg transition duration-300 opacity-0 animate-fade-down">
          TALK TO US
        </button>
      </div>
    </section>
  );
};

export default Description;
