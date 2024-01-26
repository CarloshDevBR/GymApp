const colors = {
  'green-primary': '#00875F',
  'green-secondary': '#00B37E',
  'gray-primary': '#E1E1E6',
  'gray-secondary': '#C4C4CC',
  'gray-terciary': '#7C7C8A',
  'gray-fourth': '#323238',
  'gray-fifth': '#29292E',
  'gray-sixth': '#202024',
  'gray-seventh': '#121214',
  'red-primary': '#F75A68',
  'black-primary': '#121214',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: colors,
      backgroundColor: colors,
      borderColor: colors,
    },
  },
  plugins: [],
};
