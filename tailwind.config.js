module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx} ",
    "./components/**/*.{js,ts,jsx,tsx} ",
    "./sections/**/*.{js,ts,jsx,tsx} ",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#007dff",
      primary_dark: "#2890FF",
      light: "#f7f7f7",
      dark: "#262626",
    },
    fontFamily: {
      sans: ["Poppins ", "sans-serif "],
    },
  },
  extend: {},
  plugins: [],
};
