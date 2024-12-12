import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Img3 from "../../assets/product/logoo.png";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "#category-section",
  },
  {
    id: 3,
    name: "Product",
    link: "#Product-section",
  },
  {
    id: 4,
    name: "Blogs",
    link: "#Blogs-section",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "#fProducts",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#Product-section",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#sProducts",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-secondary dark:bg-primary dark:text-secondary duration-200 relative z-40">
      {/* <a href="#category-section">Go to Category</a> */}
      <div>
        <div className="container flex justify-between items-center">
          {/*Logo and link section*/}
          <div className="flex justify-between items-center ">
            <a
              href="/"
              className=" bg-transparent rounded-full tracking-widest h-[80px] w-[85px] sm:"
            >
              <img
                src={Img3}
                alt=""
                className="bg-white/10  mt-5 w-[40px] rounded-full "
              />
            </a>
            {/*Logo and link section*/}
            <div className="lg:block lg:ml-[600px]">
              <ul className="flex items-center gap-4 lg:gap-10">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      // href="#category-section"
                      href={data.link}
                      // to={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-primary p-2 text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-secondary/20 rounded-md"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*Dark Mode section*/}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/*Navbar Rignt section*/}
    </div>
  );
};

export default Navbar;
