/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Oxygen"',
          'Ubuntu',
          '"Cantarell"',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        'gray-light': '#6C757D',
        'gray-text': '#212529',
        'gray-back': '#F8F9FA',
        'gray-lan': '#A5A8AA',
        'gray-About': '#E9ECEF',
        'gray-footer': '#F5F5F5',
        'nav-Col': '#e9ecef',
      },
    },
  },
  plugins: [],
};
