/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '9999': '9999',
      },
      backdropBlur: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
};