/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunny: {
          yellow: '#FFD51F',
          green: '#0A3914',
          cream: '#FFFDF3',
          orange: '#E07000',
          leaf: '#5E9338',
          peanut: '#D4A574',
        }
      },
    },
  },
  plugins: [],
}
