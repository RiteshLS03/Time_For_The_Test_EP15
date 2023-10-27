/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],//what files will be using tailwind classes
  theme: {
    extend: {},
    screens:{
      'sm': {'min': '0px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},

    }
  },
  plugins: [],
}

