import React from "react";
import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";
import brand6 from "../../assets/brand/br-6.png";
import brand7 from "../../assets/brand/br-7.png";
import brand8 from "../../assets/brand/br-8.png";
import brand9 from "../../assets/brand/br-9.png";

const Partners = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full h-16 overflow-hidden relative bg-white shadow-md border border-gray-300">
        <div className="absolute flex items-center h-full animate-scroll whitespace-nowrap">
          <img src={brand1} alt="Brand 1" className="w-[80px] filter invert" />
          <img src={brand2} alt="Brand 2" className="w-[80px] filter invert" />
          <img src={brand3} alt="Brand 3" className="w-[80px] filter invert" />
          <img src={brand4} alt="Brand 4" className="w-[80px] filter invert" />
          <img src={brand5} alt="Brand 5" className="w-[80px] filter invert" />
          <img src={brand6} alt="Brand 6" className="w-[80px] filter invert" />
          <img src={brand7} alt="Brand 7" className="w-[80px] filter invert" />
          <img src={brand8} alt="Brand 8" className="w-[80px] filter invert" />
          <img src={brand9} alt="Brand 9" className="w-[80px] filter invert" />

          {/* Duplicate the images to ensure continuous scrolling without gaps */}
          <img src={brand1} alt="Brand 1" className="w-[80px] filter invert" />
          <img src={brand2} alt="Brand 2" className="w-[80px] filter invert" />
          <img src={brand3} alt="Brand 3" className="w-[80px] filter invert" />
          <img src={brand4} alt="Brand 4" className="w-[80px] filter invert" />
          <img src={brand5} alt="Brand 5" className="w-[80px] filter invert" />
          <img src={brand6} alt="Brand 6" className="w-[80px] filter invert" />
          <img src={brand7} alt="Brand 7" className="w-[80px] filter invert" />
          <img src={brand8} alt="Brand 8" className="w-[80px] filter invert" />
          <img src={brand9} alt="Brand 9" className="w-[80px] filter invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
