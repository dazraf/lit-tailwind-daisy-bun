/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts,css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui:{
    themes: ['light', 'dark', 'cupcake', 'night', 'cyberpunk', "dracula"],
  }
}

