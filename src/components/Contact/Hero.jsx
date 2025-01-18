import React from "react";
import bgImage from "../../assets/rtopbg.jpg"; // Replace with your background image path

const Hero = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById("next-section-about");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <section
      className=""
    >
      <img src={bgImage} alt="" className="w-full h-96 object-cover"/>
    </section>
  );
};

export default Hero;
