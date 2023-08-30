import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        text: "#e9e9e9",
        textgrey: "#808080",
        grey: "#ccc",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
