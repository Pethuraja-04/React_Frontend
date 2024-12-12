import React from "react";

const Banner = ({ data }) => {
  return (
    <div id={data.identity} key={data.id}>
      <div className="min-h-[550px] flex justify-center items-center py-12 lg:-mt-10">
        <div className="container">
          <div
            style={{ backgroundColor: data.bgcolor }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
          >
            {/* First col */}
            <div className="p-6 sm:p-8 ">
              <p data-aos="slide-right" className="text-5xl">
                {data.discount}
              </p>
              <h1
                data-aos="zoom-out"
                className="uppercase text-4xl lg:text-7xl font-bold"
              >
                {data.title}
              </h1>
              <p data-aos="fade-up" className="text-2xl">
                {data.date}
              </p>
            </div>
            {/* Second col */}
            <div
              data-aos="zoom-in"
              className="h-full flex items-center lg:ml-10 lg:mt-10 lg:mb-8"
            >
              <img
                src={data.image}
                alt=""
                className="scale-125 w-[250px] md:w-[340px] sm:w-[200px] lg:w-[250px] sm:-mt-10 lg:-ml-10 mx-auto drop-shadow-2xl object-cover"
              />
            </div>
            {/* Third col */}
            <div className="sm:ml-10 sm:mb-10 lg:mt-20">
              <p data-aos="zoom-out" className="font-bold text-xl lg:-mt-20">
                {data.title2}
              </p>
              <p
                data-aos="fade-up"
                className="text-3xl sm:text-5xl font-bold mb-2"
              >
                {data.title3}
              </p>
              <p
                data-aos="fade-up"
                className="text-xl -tracking-wide leading-5"
              >
                {data.title4}
              </p>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                className="sm:
              mb-9"
              >
                <button
                  //   style={{ color: date.bgcolor }}
                  className="absolute bg-transparent text-white font-bold py-2 px-4 rounded-full hover:text-2xl duration-300 sm:top-2 sm:left-[310px] lg:top-20 lg:left-52"
                >
                  Shop Now »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
