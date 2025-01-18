import React from "react";

const models = [
  {
    id: 1,
    title: "CAPTIVE CAPEX MODEL",
    description:
      "In the captive capex model, the buyer of the utility scale solar project puts in the upfront capital investment for the project. The buyer owns the solar plant and the power generated is used for self-consumption. Avco Energy takes the responsibility of the turnkey EPC of the project right from project evaluation to final installation and commissioning. Our dedicated team also takes care of the O&M of the plant.",
    points: [
      "Complete Ownership of Land and Asset: The Captive Capex model allows clients to maintain ownership of the solar power plant. This enables them to take advantage of depreciation and input GST benefits, thus enabling them with greater savings. Additionally, a short payback period and high IRR returns ensure low landed levelized cost of electricity (LCOE).",
      "Waiver of cross-subsidy and other additional surcharges: The ownership structure of the captive capex model allows the omission of cross subsidy and other surcharges, which significantly reduce the power costs.",
      "Accelerated Depreciation and Tax Benefits: In the Captive Capex model, the client retains the plant ownership. This allows for accelerated depreciation benefits, thus directly leading to extra savings.",
    ],
  },
  {
    id: 2,
    title: "GROUP CAPTIVE MODEL",
    description:
      "In the group captive model, a solar power project is developed for the collective use of multiple industrial or commercial consumers. For a group captive project, a Special Purpose Vehicle (SPV) would be set up, wherein the corporate buyer(s) would hold only 26% of the equity portion of the project and needs to collectively consume at least 51% of the power produced. Multiple corporate clients could come together to pool in for the equity portion. In this case also, Avco Energy will take full responsibility to develop, operate, and maintain the solar power plant.",
    points: [
      "Minimum investment and risk required: Multiple corporate clients could come together to avail the cheaper electricity, without completely owning and investing in the projects. The buyer(s) would invest 26% of the equity portion, with Avco arranging the remaining 74%. This is done to meet the ownership criteria that allows exemption of cross subsidy and other surcharges.",
      "Waiver of cross-subsidy and other additional surcharges: The ownership structure of a group captive model allows the omission of cross subsidy and other surcharges, which significantly reduce the power costs.",
      "Multiple corporate clients can be part of this program: Multiple commercial and industrial clients can group together to avail cheaper electricity through the Open Access mode.",
    ],
  },
];

const ModelSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="flex flex-col gap-12 px-6 ">
        {models.map((model) => (
          <div
            key={model.id}
            className="flex flex-row space-y-6 justify-evenly items-center"
          >
            {/* Title */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-[#00bf63]">
                {model.title.split(" ")[0]}{" "}
                <span className="text-blue-900">
                  {model.title.split(" ")[1]} {model.title.split(" ")[2]}
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 max-w-[30rem]">{model.description}</p>
            </div>

            {/* Points */}
            <ul className="space-y-10 pl-4 max-w-96">
              {model.points.map((point, index) => (
                <li
                  key={index}
                  className=" text-gray-600 leading-relaxed"
                >
                  <span className="text-[#00bf63] font-bold text-lg ">
                    {point.split(":")[0]}:
                  </span>{" "}
                  <br />
                  <span>{point.split(":")[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelSection;
