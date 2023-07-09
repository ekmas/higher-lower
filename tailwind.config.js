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
      },
      screens: {
        'mobile': { 'raw': '(max-width: 599px)' },
        'desktop': { 'raw': '(min-width: 600px)' },

        'leaderboardDesktop': { 'raw': '(min-width: 550px)' },
        'leaderboardMobile': { 'raw': '(max-width: 549px)' },

        'm1200': { 'raw': '(max-width: 1200px)' },
        'm1000': { 'raw': '(max-width: 1000px)' },
        'm900': { 'raw': '(max-width: 900px)' },
        'm850': { 'raw': '(max-width: 850px)' },
        'm750': { 'raw': '(max-width: 750px)' },
        'm700': { 'raw': '(max-width: 700px)' },
        'm650': { 'raw': '(max-width: 650px)' },
        'm600': { 'raw': '(max-width: 600px)' },
        'm550': { 'raw': '(max-width: 550px)' },
        'm500': { 'raw': '(max-width: 500px)' },
        'm450': { 'raw': '(max-width: 450px)' },
        'm400': { 'raw': '(max-width: 400px)' },
        'm350': { 'raw': '(max-width: 350px)' },

        'portrait-main': {'raw': '(orientation: portrait) and (max-height: 3000px)'},
        'portrait-lg': {'raw': '(orientation: portrait) and (min-height: 770px)'},
        'portrait-smaller': {'raw': '(orientation: portrait) and (min-height: 630px)'},
        'portrait-smallest': {'raw': '(orientation: portrait) and (max-height: 540px)'}, 
      }
    },
  },
  plugins: [],
}

