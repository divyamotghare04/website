/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1600px",
      xxl: "2000px",
    },
    colors: {
      primary: "#1d1651",
      secondary: "#352893",
      black: "#000000",
      blue_950: "#172554",
      blue_text: "#271D6D",
      white: "#ffffff",
      gray_text: "#323030",
      blue_home: "#1E0F7694",
      blue_team: "#5841E152",
      green: "#0BAA4B",
      blue_data: "#1E0F7654",
      gray_line: "#D9D9D9",
      blue_gray: "#FFCFD8DC",
      gray_line: "#c0c6cc",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        playfair_display: ["Playfair Display"],
        avenir: ["Avenir"],
        inter: ["Inter"],
      },
    },
    animation: {
      marquee: "marquee 10s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
  },
  plugins: [],
};
