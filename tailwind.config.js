/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        corestack: {
          blue: '#0066cc',
          darkBlue: '#003d7a',
        },
        success: '#48BB78',
        danger: '#F56565',
        warning: '#C05621',
      },
    },
  },
  plugins: [],
}
