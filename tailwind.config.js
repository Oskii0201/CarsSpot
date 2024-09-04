/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Flex"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif']
      },
      fontSize: {
        '15px': '15px',
        '21.5': '21.5px',
        '40px': '40px',
      },
      lineHeight: {
        '22.5px': '22.5px',
        '84px': '83.92px',
        '48px': '48px',
      },
      letterSpacing: {
        '-0.02em': '-0.02em',
        '-0.03em': '-0.03em',
        '-0.04em': '-0.04em'
      },
      colors: {
        darkgray: '#282828',
        darkblue: '#0147FF',
        white: '#F7F7F7',
      },
    },
  },
  plugins: [],
}