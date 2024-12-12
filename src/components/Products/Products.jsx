import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/shirt1.png";
import Img2 from "../../assets/product/tshirt.png";
import Img3 from "../../assets/product/cap.png";
import Img4 from "../../assets/product/black-hoddie.png";
import Img5 from "../../assets/hero/Boots.png";
import Img6 from "../../assets/product/perfumes.png";
import Img7 from "../../assets/product/cargopant.png";
import Img8 from "../../assets/product/blackwatch.png";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Exclusive Shirts",
    price: "250 - 6000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Elite T-Shirts",
    price: "300 - 4000",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Luxury Caps",
    price: "100 - 3000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Comfy Hoodies",
    price: "500 - 3000",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Stylish Footwear",
    price: "1000 - 5000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Signature Scents",
    price: "500 - 3000",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Trendy Trousers",
    price: "800 - 5000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Classic Watches",
    price: "600-12000",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div id="Product-section">
      <div className="container">
        {/* Header section */}
        <Heading title="our Products" subtitle="Explore Our Products" />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
