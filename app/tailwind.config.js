/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#BD1B1B",
        redHover: "#8a1313",
      },
      fontFamily: {
        manrope: "Manrope",
      },
      blur: {
        xs: "1px",
      },
    },
  },
  plugins: [],
};
