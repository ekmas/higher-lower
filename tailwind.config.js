/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#111',
        secondaryBlack: '#333',
        buttonBg: '#741277',
        buttonHoverBg: '#98199c',
      },
      width: {
        container: '1300px'
      },
      padding: {
        containerDesktop: '30px',
        containerMobile: '20px'
      }
    },
  },
  plugins: [],
}

