/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
  plugins: [],
};
