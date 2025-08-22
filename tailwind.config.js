module.exports = {
  darkMode: "class", // enable class-based dark mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#7edbebff",
        pastelPink: "#FFB6C1",
        coral: "#FF6F61",
      },
      backgroundImage: {
        stars: "url('/susan-wilkinson-bv5X7oY5g5U-unsplash')",
      },
    },
  },
  plugins: [],
};
