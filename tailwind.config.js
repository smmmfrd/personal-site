/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cool-gray': 'rgb(15, 23, 42)'
        // 'blurredBg': 'rgba(0, 0, 0, 0.125)',
        // 'foggedBg': 'rgba(0, 0, 0, 0.175)'
      }
    },
  },
  plugins: [],
}
