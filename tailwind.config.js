/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackone': '#2A2A2A',
        'whiteone': '#F2F2F2',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
    plugins: [],
  }
}