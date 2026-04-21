/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class", // تأكد من تفعيل الوضع الداكن بهذه الطريقة

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      // tiny: "340px", // نقطة توقف مخصصة لـ 340px
      xsm: "480px", // نقطة توقف مخصصة لـ 480px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(#3573B5  0%,   #17324F 100%)",
        "primary-gradient-light":
          "linear-gradient(#9DD9F2  0%,   #3777BB 100%)",
        "custom-gradient":
          "linear-gradient(89.18deg, #A5A5A5 0%, #FFFFFF 49.47%, #A5A5A5 93.16%);",
      },
      fontFamily: {
        ar: ["cairo", "sans-serif"],
        en: ["Montserrat", "sans-serif"],
        tektur: ["Tektur", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#FFFEE6",
          100: "#FEFBB0",
          200: "#a3c0e0",
          300: "#FEF754",
          400: "#FDF533",
          500: "#90d3cb",
          600: "#E6DD00",
          700: "#B4AD00",
          800: "#8B8600",
          900: "#6A6600",
        },
        secondary: {
          50: "#E8E8E8",
          100: "#B7B7B8",
          200: "#949596",
          300: "#646466",
          400: "#454648",
          500: "#2b354d",
          600: "#151618",
          700: "#101112",
          800: "#0D0D0E",
          900: "#0A0A0B",
        },
        black: {
          500: "#080F1B",
        },
      },
    },
  },
  plugins: [],
};
