/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['"MedievalSharp"', 'cursive'],
      },
      colors: {
        primary: '#f5a623',
        background: '#2b2b2b',
        cardBackground: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}