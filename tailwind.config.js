/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700', // Gold color
          dark: '#B8860B', // Dark gold color
        },
        dark: {
          DEFAULT: '#000000', // Black for dark theme
          lighter: '#1C1C1C', // Slightly lighter black
        },
      },
    },
  },
  plugins: [],
};