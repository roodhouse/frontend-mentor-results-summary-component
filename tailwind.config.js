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
      veryLightBlue: '#ECF2FF',
      gradientOneFirst: 'rgba(119, 85, 255, 1)',
      gradientOneSecond: 'rgba(105, 67, 255, 1)',
      gradientOneThird: 'rgba(47, 44, 233, 1)',
      gradientTwoFirst: 'rgba(77, 33, 201, 1)',
      gradientTwoSecond: 'rgba(37, 33, 201, 0)',
      gradientTwoThird: 'rgba(37, 33, 201, 0)'
    }
  },
  plugins: [],
}