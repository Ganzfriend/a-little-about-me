module.exports = {
  darkMode: "class", // enable class-based dark mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#7edbeb",
        pastelPink: "#FFB6C1",
        coral: "#FF6F61",
      },
      backgroundImage: {
        rainbow: "url('/rainbow.jpg')",
      },
    },
  },
  plugins: [],
};
