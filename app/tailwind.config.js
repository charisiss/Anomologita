/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        basic: "url('basic-bg.png')",
      },
      colors: {
        red: "#900009",
      },
      fontFamily: {
        manrope: "Manrope",
      },
    },
  },
  plugins: [],
};
