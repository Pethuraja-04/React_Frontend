// src/components/Blogs/Blogs.jsx
import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "Top Smartwatches in 2024: A Complete Comparison?",
    subtitle:
      "A detailed comparison of the best smartwatches available this year.",
    Published: "Jan 20, 2024 by GadgetGuru",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to Choose the Right Gadgets for Your Smart Home?",
    subtitle: "Transform your home with these essential smart devices.",
    Published: "Jan 20, 2024 by HomeTech",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "The Future of VR: Trends to Watch in 2024",
    subtitle:
      "Discover the exciting advancements in virtual reality and what they mean for you.",
    Published: "Jan 20, 2024 by VRTrends",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div id="Blogs-section" className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* Blogs section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-secondary dark:bg-primary"
            >
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-300">{data.Published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="text-sm line-clamp-2 text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
