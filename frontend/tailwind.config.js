/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/*.{html,jsx,js}",
      "./src/**/*.{html,jsx,js}"
  ],
  theme: {
    extend: {
        fontFamily: {
            check: "'Lato', sans-serif",
            rem: "'REM', sans-serif"
        }
    },
  },
  plugins: [],
}

