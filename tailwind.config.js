/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E88E5",
        secondary: "#FF9800",
        background: "#0D1117",
        foreground: "#161B22",
      },
    },
  },
  plugins: [],
};
