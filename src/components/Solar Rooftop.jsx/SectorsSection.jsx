import React from "react";
import commercialIcon from "../../assets/1.svg"; // Replace with actual image paths
import residentialIcon from "../../assets/2.svg";
import governmentIcon from "../../assets/1.svg";

const sectors = [
  {
    id: 1,
    title: "Commercial and Industrial",
    description:
      "Our team works with corporations to assess their energy needs, sustainability goals, and production requirements to design and implement solar rooftop solutions with the aim of reducing the overall total cost of electricity. Some of our key partners like Piramal, Vedika group, Malcom, etc. have realized ~25-40% savings in energy expenses.",
    points: [
      "FREE project evaluation report and site survey",
      "Power consumption analysis and study",
      "In-house O&M",
      "24-48 Hour Service guarantee",
    ],
    icon: commercialIcon,
  },
  {
    id: 2,
    title: "Residential",
    description:
      "Avco has a dedicated residential rooftop team focused on meeting the energy demands of homeowners. Our team performs an extensive study of the roof, area, and state policies to provide the most optimum solution.",
    points: [
      "Designed specialized solar kits for residential purposes",
      "10-12 days installation",
      "24-48 Hour service guarantee",
    ],
    icon: residentialIcon,
  },
  {
    id: 3,
    title: "Government",
    description:
      "Avco works extensively with government bodies such as PGCIL (Power Grid Corporation of India Limited), SBI, CEL (Central Electronics Limited), GEDA, WBREDA, RNDIS, and others to design and install MW scale rooftop projects across schools, railways, offices, and several other government buildings.",
    points: [
      "Empanelments with multiple state nodal agencies",
      "Strong liaisoning",
    ],
    icon: governmentIcon,
  },
];

const SectorsSectionWithCustomOrder = () => {
  return (
    <section className="bg-gray-50 py-16 md:px-20 mx-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
            SECTORS <span className="text-blue-900">WE CATER</span>
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto my-4"></div>
        </div>

        {/* Sectors */}
        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className={`flex flex-row items-center gap-8 ${
                index === 1 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex justify-center">
                {/* <div className="w-32 h-32 rounded-full border-2 border-green-500 flex items-center justify-center"> */}
                  <img
                    src={sector.icon}
                    alt={sector.title}
                    className="w-[200rem] animate-fade-left"
                  />
                {/* </div> */}
              </div>

              {/* Description */}
              <div className={`md:px-20 animate-fade-right ${
                index === 1 ? "pl-4" : ""
              }`}>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {sector.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sector.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSectionWithCustomOrder;
