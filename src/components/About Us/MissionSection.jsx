import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Mission */}
        <div className="px-6 md:pr-12 border-r-2 border-blue-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            OUR <span className="text-[#00bf63]">MISSION</span>
          </h2>
          <div className="w-16 h-1 bg-[#00bf63] my-4"></div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            We are committed to helping organizations achieve the lowest landed
            costs of electricity and meet their sustainability goals, keeping in
            mind our emphasis on quality and service. To further enhance this
            adoption, along with engineering and design services, our team is
            working on providing different financing solutions (Opex model,
            collateral free loans, EMI solutions etc.), allowing clients to
            adopt solar power and realize all the financial and environmental
            benefits associated with it.
          </p>
        </div>

        {/* Right Column: Core Values */}
        <div className="px-6 md:pl-12 space-y-8">
          {/* Reliability */}
          <div>
            <h3 className="text-xl font-bold text-[#00bf63]">RELIABILITY</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              From consultation to project execution and implementation, Trust
              and Reliability is at the core of our service offerings. Integrity
              in business improves efficiency, customer experience, and general
              workplace satisfaction.
            </p>
          </div>

          {/* Dedication */}
          <div>
            <h3 className="text-xl font-bold text-[#00bf63]">DEDICATION</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our team is extremely passionate and dedicated towards the green
              energy space. From plant design, to final installation and
              commissioning, we lay immense emphasis on product and service
              quality.
            </p>
          </div>

          {/* Innovation */}
          <div>
            <h3 className="text-xl font-bold text-[#00bf63]">INNOVATION</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Innovation is at the heart of our beliefs and practices at AVCO.
              Innovations leads to more effective engineering, design and
              processes to maximize plant generation and space utilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
