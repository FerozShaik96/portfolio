/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#6C757D",
        "gray-text": "#212529",
        "gray-back": "#F8F9FA",
        "gray-lan": "#A5A8AA",
        "gray-About": "#E9ECEF",
      },
    },
  },
  plugins: [],
};
