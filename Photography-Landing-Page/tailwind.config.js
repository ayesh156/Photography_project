/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0D0F11',
        'primary-white': '#898D92',
        'primary-green': '#141F24',
        'secondary-green': '#233942',
        // Add more colors here
      },
    },
  },
  plugins: [],
}