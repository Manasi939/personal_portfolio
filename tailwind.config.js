/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '780px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1300px',
    },
    extend: {
      fontFamily:{
        'nav':'Inter',
        Besley:['Besley', 'serif']
      },
      colors:{
        'nav-text':'rgba(11, 113, 81, 1)',
         'bluee':'#3ec5a8'
      }
    },
  },
  plugins: [],
}

