/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      colors: {
        "background-100": "#f2f2f2",
        "background-200": "#e9ecf2",
        primary: "#0190F9",
        "primary-lighten": "#B2D4FC",
        "primary-red": "#f87171",
        disabled: "E5E7EB",
        success: "#22c55e",
        danger: "#ef4444",
      },
      minWidth: {
        xs: "320px",
        sm: "384px",
      },
      screens: {
        mobile: "320px",
        base: "1440px",
      },
    },
  },
};
