/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        card: '500px',
      },
      gridTemplateRows: {
        card: '40% 1fr',
        'card-min': '80% 1fr',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
