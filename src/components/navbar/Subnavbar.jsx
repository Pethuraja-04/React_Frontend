import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Subnavbar = ({ handleOrderPopup }) => {
  return (
    <div className="container  mb-5 lg:w-[90%] lg:ml-20  z-50 bg-primary rounded-full dark:bg-secondary duration-200 sm:ml-14">
      <div className="relative top-5 flex justify-between ">
        <a
          href=""
          className="text-secondary  font-semibold tracking-widest text-2xl uppercase sm:text-3xl dark:text-primary"
        >
          Cookee Styles
        </a>
      </div>
      <div className="flex justify-end items-center gap-4">
        {/*Search Bar section*/}
        <div className="relative -top-4 group">
          <input type="text" placeholder="Search" className="search-bar " />
          <FaSearch
            className="text-xl text-gray-600 dark:text-gray-400 bg-transparent absolute top-1/2 -translate-y-2 right-3 duration-300
     group-hover:text-red-500 "
          />
        </div>
        {/*Add to card section*/}
        <button className="relative p-3 -top-4" onClick={handleOrderPopup}>
          <FaCartShopping className="text-xl text-gray-600  dark:text-gray-400" />
          <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
            4
          </div>
        </button>
      </div>
    </div>
  );
};

export default Subnavbar;
