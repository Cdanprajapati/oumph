module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'min' : '100px', 'max' : '250px'},
      'sm': { 'min': '250px', 'max': '640px' },

      'md': { 'min': '640px', 'max': '720px' },

      'lg': { 'min': '720px', 'max': '1279px' },

      'xl': { 'min': '1280px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
