import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/category/outfit.png";
import Image2 from "../../assets/category/outfit8.png";
import Image3 from "../../assets/category/outfit2.png";
import Button from "../Shared/Button";
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Find",
    title: "Your Style",
    title2: "Yourself",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Best",
    title: "New Arrivals &",
    title2: "Collection",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "💕",
    title: "Fashion",
    title2: "Week",
  },
];
const Hero = ({ handleOrderPopup }) => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container border-secondary">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center ">
        <div className="container pb-8 sm:pb-0">
          {" "}
          {/* hero section */}
          <Slider {...setting}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-secondary dark:text-secondary sm:text-[70px] md:text-[100px] xl:text-[150px] font-bold z-50"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="true"
                    >
                      <br />

                      <Button
                        text="Shop Now »"
                        bgcolor="bg-primary"
                        textcolor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-out"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] scale-105 lg:scale-110  object-contain mx-auto drop-shadow-[8px_12px_13px_gray] relative "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
