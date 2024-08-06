/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  /* important: true, */
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#efebe9",
          100: "#d7ccc8",
          200: "#bcaaa4",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#5d4037",
          800: "#4e342e",
          900: "#3e2723",
        },
        darkerlime: {
          50: "#f9fbe7",
          100: "#f0f4c3",
          200: "#e6ee9c",
          300: "#dce775",
          400: "#d4e157",
          500: "#cddc39",
          600: "#c0ca33",
          700: "#afb42b",
          800: "#9e9d24",
          900: "#827717",
        },
      },
    },
  },
};
