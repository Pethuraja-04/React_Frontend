import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import tshirts from "./assets/hero/tshirts.png";
import shorts from "./assets/category/chino.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup.jsx";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Subnavbar from "./components/navbar/Subnavbar.jsx";

const BannerData = {
  identity: "fProducts",
  discount: "30% OFF",
  title: "Hurry Up",
  date: "10 Jan to 28 Jan",
  image: tshirts,
  title2: "Premium TShirts",
  title3: "BIG SALE",
  title4: "Wear it. Love it. Get it on sale today! ",
  bgcolor: "#f42c37",
};

const BannerData2 = {
  identity: "sProducts",
  discount: "Don't Miss",
  title: "EXCLUSIVE OFFER",
  date: "14 Jan to 28 Jan",
  image: shorts,
  title2: "Air Solo Bass",
  title3: "SUPER SALE",
  title4: "Summer shorts, sizzling savings! ",
  bgcolor: "#2dcc6f",
};

const App = () => {
  const [OrderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!OrderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-secondary dark:bg-primary dark:text-secondary duration-200 overflow-hidden">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Subnavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Category />
                <Services />
                <Banner data={BannerData} />
                <Products />
                <Banner data={BannerData2} />
                <Blogs />
                <Partners />
              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
        <Popup OrderPopup={OrderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
