/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'toonup': '#9F59DC',
        'trap': '#DF4440',
        'lure': '#3E8844',
        'throw': '#D57340',
        'squirt': '#D937BC',
        'zap': '#BF9C59',
        'sound': '#514ED4',
        'drop': '#3EA4A9',
      }
    },
  },
  plugins: [],
}

