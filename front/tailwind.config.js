/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      7: '7px',
    },
    fontFamily: {
      battle: ['Battle'],
    },
    extend: {
      colors: {
        valhalla: 'var(--valhalla)',
        white: 'var(--white)',
        yellow: 'var(--yellow)',
        red: 'var(--red)',
        linearStart: '#FBB744',
        linearEnd: '#F8260D',
      },
    },
  },
  plugins: [],
}
