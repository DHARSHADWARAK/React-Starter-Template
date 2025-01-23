import React from "react";
import map from "../../assets/image.png";

const Form = () => {
  return (
    <section className="bg-gray-50">
      {/* Contact Information Section */}
      <div className=" text-white ">
        <div className="bg-[#00bf63] py-8 mx-auto flex justify-center gap-20 leading-10 text-center w-[50rem] items-center">
          <div>
            <h3 className="font-semibold text-lg">CORPORATE HQ</h3>
            <p>2/5, Sarat Bose Road, SukhSagar,</p>
            <p>Building - 2, Floor - 2</p>
            <p>Kolkata 700 020</p>
          </div>
          {/* <div>
            <h3 className="font-semibold text-lg">BRANCH</h3>
            <p>502, Parekh Market,</p>
            <p>39, JSS Road, Kennedy Bridge,</p>
            <p>Opera House, Mumbai - 400 004</p>
          </div> */}
          <div>
            <h3 className="font-semibold text-lg">CONTACT US</h3>
            <p>Email: info@avcoenergy.in</p>
            <p>Telephone: 033 2475 0337</p>
            <p>Mobile: +91 9830011400</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center">CONTACT FORM</h2>
        <p className="text-gray-600 text-center mt-2">
          We look forward to hearing from you. Email us to learn more about our firm and capabilities.
        </p>

        <form className="mt-8">
          {/* Personal Details */}
          <h3 className="text-left text-lg font-semibold text-gray-800">PERSONAL DETAILS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input
              type="text"
              placeholder="First Name"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
            <input
              type="text"
              placeholder="India"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
            <input
              type="text"
              placeholder="Website"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2"
            />
          </div>

          {/* Requirement */}
          <h3 className="text-left text-lg font-semibold text-gray-800 mt-10">REQUIREMENT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <select className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2">
              <option value="">Solar Rooftop </option>
              <option value="Option2">Solar Carport</option>
              <option value="Option3">Floating Solar</option>
            </select>
            <textarea
              placeholder="Details"
              className="border-b-2 focus:outline-none focus:border-[#00bf63] p-2 h-20 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-left mt-6">
            <button
              type="submit"
              className="bg-[#00bf63] text-white px-6 py-2 font-semibold hover:bg-blue-700 transition rounded"
            >
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>
      <img src={map} alt="" className="w-full" />
    </section>
  );
};

export default Form;
