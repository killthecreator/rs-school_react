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
      gridTemplateColumns: {
        'card-max': '60% 1fr',
        cards: 'repeat(3, 300px)',
      },
      maxHeight: {
        '600px': '600px',
      },
      maxWidth: {
        '1000px': '1000px',
      },
      zIndex: {
        negative: '-1',
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.7)',
      },
      borderRadius: {
        half: '50%',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
