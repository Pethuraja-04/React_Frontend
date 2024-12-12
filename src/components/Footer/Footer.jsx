import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#" },
  { title: "Contact", link: "/#" },
  { title: "Blogs", link: "/#" },
];
const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href=""
              className="text-red-600 font-semibold tracking-widest text-3xl  uppercase sm:text-3xl"
            >
              Cookee Styles
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Elevate your style, define your confidence.
            </p>
            <p className="text-gray-500 mt-2">Made With ❤️ happy </p>
            <a
              href=""
              className="inline-block font-bold bg-primary/90 text-white  py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our GItHub
            </a>
          </div>
          <div className="cols-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 lg:pl-[150px]">
            <div className="py-8 px-4">
              <h1 className="font-bold text-secondary text-xl sm:text-left mb-1 lg:text-3xl">
                Links{" "}
              </h1>
              <hr className="w-20 h-[1px] bg-red-500 border-none mb-3" />
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-secondary duration-300 dark:hover:text-white dark:text-gray-300 lg:text-xl"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 lg:pl-[150px]">
              <h1 className="font-bold text-secondary text-xl sm:text-left mb-1 lg:text-3xl">
                Quick Links
              </h1>
              <hr className="w-32 h-[1px] bg-red-500 border-none mb-3" />
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-secondary duration-300 dark:hover:text-white dark:text-gray-300 lg:text-xl"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 text-gray-600 sm:col-auto lg:pl-[300px]">
              <h1 className="font-bold text-secondary text-xl sm:text-left mb-1 lg:text-3xl">
                Address
              </h1>
              <hr className="w-24 h-[1px] bg-red-500 border-none mb-3" />
              <div className="items-center gap-3">
                <FaLocationArrow />
                <p className="text-gray-600 lg:text-xl">Madurai, Tamilnadu</p>

                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p className="lg:text-xl">+911234567898</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="#"
                    className="text-3xl text-secondary hover:text-red-600 duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-3xl text-secondary hover:text-red-600 duration-300"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-3xl text-secondary hover:text-red-600 duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="text-3xl text-secondary hover:text-red-600 duration-300"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
