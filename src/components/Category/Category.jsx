import React from "react";
import Image1 from "../../assets/category/whiteshoes.png";
import Image3 from "../../assets/category/perfume.png";
import Image2 from "../../assets/category/brownwatch.png";
import Image4 from "../../assets/category/cargo.png";
import Image5 from "../../assets/category/sunglass.png";
import Image6 from "../../assets/category/bracelet.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div id="category-section" className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*First column*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-catpink2 to-catpink text-secondary rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-20">
                <p className="mb-[2px] text-gray-400">Walk</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl text-gray-600 xl:text-5 font-bold opacity-20 mb-2">
                  confidence
                </p>

                <Button
                  text="Browse"
                  bgcolor={"bg-white"}
                  textcolor={"text-catpink"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[200px]  absolute -bottom-5 left-10"
            />
          </div>
          {/*Second column*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-catgreen2 to-catgreen text-secondary rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-20">
                <p className="mb-[2px] text-secondary">Treasure</p>
                <p className="text-2xl font-semibold mb-[2px]">Every</p>
                <p className="text-4xl xl:text-5 font-bold opacity-40 mb-2">
                  Second
                </p>

                <Button
                  text="Browse"
                  bgcolor={"bg-white"}
                  textcolor={"text-catgreen"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[300px] absolute left-16 top-16 lg:top-[40px]"
            />
          </div>
          {/*third column*/}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-catdblue to-catdblue2  text-secondary rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-10 ml-10">
                <p className="text-xl mb-[2px] text-secondary">Fragrance</p>
                <p className="text-3xl font-semibold mb-[2px]">Of</p>
                <p className="text-5xl xl:text-5 font-bold opacity-40 mb-2">
                  Dreams
                </p>
                <Button
                  text="Browse"
                  bgcolor={"bg-white"}
                  textcolor={"text-catdblue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[270px]  absolute top-1/2 -translate-y-1/2 -right-10 me-14"
            />
          </div>
          {/*Fourth column*/}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-700 to-gray-600 text-secondary rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-10 ml-10">
                <p className="text-xl mb-[2px] text-secondary">Own</p>
                <p className="text-3xl font-semibold mb-[2px]">Your</p>
                <p className="text-5xl xl:text-5 font-bold opacity-40 mb-4">
                  Style
                </p>
                <Button
                  text="Browse"
                  bgcolor={"bg-white"}
                  textcolor={"text-gray-700"}
                />
              </div>
            </div>
            <img
              src={Image4}
              alt=""
              className="w-[250px]  absolute top-1/2 -translate-y-1/2 -right-0 me-10"
            />
          </div>
          {/*Fifth column*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-catbrown to-catbrown2 text-secondary rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-secondary">Glamour</p>
                <p className="text-2xl font-semibold mb-[2px]">meets</p>
                <p className="text-4xl xl:text-5 font-bold opacity-40 mb-2">
                  protection
                </p>
                <Button
                  text="Browse"
                  bgcolor={"bg-white"}
                  textcolor={"text-catbrown"}
                />
              </div>
            </div>
            <img
              src={Image5}
              alt=""
              className="w-[200px] absolute bottom-0 right-5 "
            />
          </div>
          {/*Sixth column*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-catblue2 to-catblue text-secondary rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-secondary">Elevate</p>
                <p className="text-2xl font-semibold mb-[2px]">Your</p>
                <p className="text-4xl xl:text-5 font-bold opacity-40 mb-2">
                  Look
                </p>
                <Button
                  text="Browse"
                  bgcolor={"bg-white"}
                  textcolor={"text-catblue"}
                />
              </div>
            </div>
            <img
              src={Image6}
              alt=""
              className="w-[200px] absolute bottom-5 -right-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
