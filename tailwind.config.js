/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths to match your project structure
  darkMode: "class", // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      // Custom breakpoints
      screens: {
        mobile: "425px", // Custom mobile breakpoint
        sm: "640px", // Small devices (sm)
        md: "768px", // Medium devices (md)
        lg: "1024px", // Large devices (lg)
        xl: "1280px", // Extra-large devices (xl)
      },
      // Custom fonts
      fontFamily: {
        "head-font": ["Jacquard 12", "system-ui"], // Custom font family
      },
      // Custom colors
      colors: {
        primary: "#09403a", // Primary color
        secondary: "#fffbf2", // Secondary color
        brandyellow: "#fdc62e", // Brand yellow
        brandgreen: "#2dcc6f", // Brand green
        brandblue: "#1376f4", // Brand blue
        brandwhite: "#eeeeee", // Brand white
        darkprimary: "#5F6F65", // Dark mode primary color
        darkprimary2: "#808D7C", // Dark mode secondary color
        darkprimary3: "#9CA986", // Dark mode tertiary color
        darkprimary4: "#C9DABF", // Dark mode quaternary color
        catblue: "#71C9CE", // Custom category blue
        catblue2: "#A6E3E9", // Custom category blue variant
        catpink: "#F2BED1", // Custom category pink
        catpink2: "#F8E8EE", // Custom category pink variant
        catgreen: "#697565", // Custom category green
        catgreen2: "#3C3D37", // Custom category green variant
        catbrown: "#AD8B73", // Custom category brown
        catbrown2: "#CEAB93", // Custom category brown variant
        catdblue: "#1E2A5E", // Custom category dark blue
        catdblue2: "#55679C", // Custom category dark blue variant
      },
      // Custom container settings
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "3rem", // Padding for small screens
          lg: "4rem", // Padding for large screens
          xl: "5rem", // Padding for extra-large screens
          "2xl": "6rem", // Padding for 2XL screens
        },
      },
      // Custom background images
      backgroundImage: {
        "home-bg": "url('./assets/home22.jpg')", // Example background image
      },
      // Custom animations
      keyframes: {
        "scroll-left": {
          "0%": {
            transform: "translateX(100%)", // Start offscreen to the right
          },
          "100%": {
            transform: "translateX(-100%)", // End offscreen to the left
          },
        },
      },
      animation: {
        scroll: "scroll-left 20s linear infinite", // Infinite scroll animation
      },
    },
  },
  plugins: [],
};
