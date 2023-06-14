/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBg: '#89158d',
        buttonHoverBg: '#79147c',
        buttonBorder: ''
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

