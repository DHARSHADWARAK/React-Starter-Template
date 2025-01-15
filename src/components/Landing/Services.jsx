import React from "react";
import bgImg from "../../assets/landing_sec_bg.jpeg";

const services = [
  {
    title: "ROOFTOP SOLAR",
    description:
      "Avco Energy is a fully integrated EPC solutions provider focusing on engineering, design, installation and commissioning of solar projects across government, commercial, institutional and residential sectors.",
    image: "src/assets/s4.jpeg",
    png: "src/assets/sp4.png",
  },
  {
    title: "OPEN ACCESS",
    description:
      "Open Access enables corporates and industries to buy power from the open market and meet their electricity needs, while benefiting from lower than grid electricity tariffs.",
    image: "src/assets/s3.jpeg",
    png: "src/assets/sp3.png",
  },
  {
    title: "FLOATING SOLAR",
    description:
      "Floating solar allows us to reap all the benefits of solar energy, without utilizing valuable land and space. Clients can save valuable land space and make use of otherwise unused water bodies.",
    image: "src/assets/s2.jpeg",
    png: "src/assets/sp2.png",
  },
  {
    title: "SOLAR CARPORTS",
    description:
      "Solar carports are an offshoot of traditional carports, as they serve the dual purpose of providing shade to the vehicle parked underneath, along with the commercial and sustainable benefits.",
    image: "src/assets/s1.jpeg",
    png: "src/assets/sp1.png",
  },
];

const Services = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/60 via-lime-300/40 to-green-500/80"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          <span className="text-[#00bf63]">AVCO</span> SERVICES
        </h2>
        <div className="flex justify-center mt-2 mb-10">
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transform transition duration-300 opacity-0 animate-flip-in"
              style={{
                animationDelay: `${index * 0.3}s`, // Staggered delay for each card
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col p-6 justify-center items-center gap-2">
                <h3 className="text-xl font-semibold text-blue-900 flex items-center justify-center">
                  {service.title}
                </h3>
                <img src={service.png} alt={service.title} className="w-20" />
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
