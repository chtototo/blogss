/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts,css}"],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto Mono', 'sans-serif'],
      'ubuntu': ['Ubuntu Mono', 'sans-serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

