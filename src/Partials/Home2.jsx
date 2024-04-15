import React from 'react'

const Home2 = () => {
  return (
    
    <>
    {/* First Section */}
    <div  className="w-full  bg-stone-710 text-white bg-cover ">
      <div className=" px-[5vw]">
        <div className=" h-1/2 bg-dark bottom-0"></div>
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="w-full lg:w-6/12">
            <img
              src="img/webp/abstract18.webp"
              alt="abstract image"
              className="w-full rounded-lg shadow"
              data-aos="fade-up"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12">
            <img
              src="img/webp/abstract6.webp"
              alt="abstract image"
              className="w-full rounded-lg shadow"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12">
            <img
              src="img/webp/abstract9.webp"
              alt="abstract image"
              className="w-full rounded-lg shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Second Section */}

    <div className="bg-stone-710">
  <div className="mx-14 my-12 px-60 py-20 text-center">
    <div className="flex align-items-center ">
      <div id='in-left2'>
      <div  className="  text-right pr-8" data-aos="fade-right">
        <span className="h5 text-secondary fw-lighter">What we do</span>
        <h2 className="text-6xl font-semibold  mt-3 lg:mt-5 text-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </h2>
      </div>
      </div>
      <div  className="col-12 lg:col-lg-5" data-aos="fade-left">
        <div id='in-right'>

  <h3  className="pt-5 text-left text-lg font-semibold">Product Design & Strategy</h3>
  <p  className="text-secondary text-left">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua.<br />
    <a href="#" className="link-fancy link-fancy-light me-2">
      Tell me more
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-arrow-right-circle inline-block align-middle"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
      />
    </svg>
  </p>
  <h3 className="border-t text-left border-secondary pt-5 mt-5">
    Development & Engineering
  </h3>
  <p className="text-secondary text-left">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua.<br />
    <a href="#" className="link-fancy link-fancy-light me-2">
      Tell me more
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-arrow-right-circle inline-block align-middle"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
      />
    </svg>
  </p>
        </div>
</div>

        </div>
      </div>
    </div>

  </>
);
}

export default Home2