/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "3xl": "6rem",
      // },
      center: true,
    },

    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2400px",
      },
      colors: {
        textColor: "#15171c",
        bgColor: "#1c1e26",
        bgColorHeader: "rgba(45, 49, 57 .3)",
        mainColor: "#9feaad",
        mainColor20: "rgba(145, 216, 209, .3)",
        subColor: "#82a8d2",
        subColor2: "#8be1e4",
        subBgColor: "rgba(96, 121, 153,.2)",
        subBdColor: "rgba(96, 121, 153,.6)",
      },

      boxShadow: {
        "3xl": "0 -4px 6px -4px gray inset",
      },
    },
  },
  plugins: [require("daisyui")],
};
