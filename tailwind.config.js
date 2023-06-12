/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      yellow: '#FFB21E',
      blue: '#1125D6',
      green: '#00BB8F',
      red: '#FF5555',
      darkNavy: '#303B59',
      lightBlue: '#CAC9FF',
      veryLightBlue: '#ECF2FF'
    }
  },
  plugins: [],
}