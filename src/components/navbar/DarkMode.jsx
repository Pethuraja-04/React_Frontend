import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [Theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", Theme);
    if (Theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
    }
  }, [Theme, element]);

  return (
    <div className="relative left-10">
      <img
        onClick={() => setTheme(Theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
          Theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => setTheme(Theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="Dark Mode"
        className={`w-12 cursor-pointer transition-all duration-300 ${
          Theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
