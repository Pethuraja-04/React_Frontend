import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative bg-gray-400">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-contain rounded-md"
              />
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text={"Add to card"}
                  bgcolor={"bg-primary"}
                  textcolor={"text-white"}
                />
              </div>
            </div>
            <div leading-7>
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">Rs :{data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
