import React from "react";



const FlipBoxSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-100 via-white to-green-100 py-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          <span className="text-[#00bf63]">BUSINESS</span>{" "}
          <span className="text-blue-800">MODELS</span>
        </h2>
        <div className="flex justify-center mt-2 mb-10">
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        {/* Models */}
        <div className="flex flex-col md:flex-row items-center justify-center  gap-8 px-6">
        

            <div  className='flip-box animate-fade-left'>
              <div className="flip-box-inner ">
                <div className='flip-box-front  bg-gray-100  rounded-lg shadow-lg text-gray-800'>
                  <div className='flex flex-col justify-center items-center'>
                  <div className='flex text-xl font-semibold items-center justify-center p-2 pt-[12.5%]'>
                  <img src="src\assets\o1.png" alt="Description" className="w-auto h-auto md:w-auto md:h-auto  pt-[12.5%] lg:pt-0" />
                    </div>
                  <img src="src\assets\—Pngtree—vector star icon_4231909.png" className='w-[40%]' alt="" />{/*Use symbol related to the section*/}
                  </div>
                </div>
                <div className='flip-box-back bg-[#00bf63] flex flex-col items-center gap-5 md:gap-10 rounded-lg shadow-lg text-white'>
                  <h3 className="text-4xl md:text-6xl font-bold pt-3">CAPEX</h3>
                  <div>
                    <ul className=" md:text-xl flex list-disc flex-col md:gap-3 items-start">
                        <li>
                            Complete owner ship of the solar plant
                        </li>
                        <li>
                            accelerated Depreciation Benifits
                        </li>
                        <li>
                            Input GST Credit
                        </li>
                        <li>
                            4-5 year payback, High IRR and returns
                        </li>
                        <li>Plat Monitoring and Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div  className='flip-box animate-fade-right'>
              <div className="flip-box-inner ">
                <div className='flip-box-front  bg-gray-100  rounded-lg shadow-lg text-gray-800'>
                  <div className='flex flex-col justify-center items-center'>
                  <div className='flex text-xl font-semibold items-center justify-center p-2 pt-[12.5%] lg:pt-0'>
                  <img src="src\assets\o2.png" alt="Description" className="w-auto h-auto md:w-auto md:h-auto  " />
                    </div>
                  <img src="src\assets\—Pngtree—vector star icon_4231909.png" className='w-[40%]' alt="" />{/*Use symbol related to the section*/}
                  </div>
                </div>
                <div className='flip-box-back bg-[#00bf63] flex flex-col items-center gap-5 md:gap-10 rounded-lg shadow-lg text-white'>
                  <h3 className="text-4xl md:text-6xl font-bold pt-3">CAPEX</h3>
                  <div>
                    <ul className=" md:text-xl flex list-disc flex-col md:gap-3 items-start">
                        <li>
                            AVCO owns the solar plant
                        </li>
                        <li>
                            Zero investment required
                        </li>
                        <li>
                            Yearly savingd
                        </li>
                        <li>
                            Zero O&M
                        </li>
                        <li>PPA Agreement with AVCO</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      
    </section>
  );
};

export default FlipBoxSection;
