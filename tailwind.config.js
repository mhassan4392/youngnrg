/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6641B",
        "light-bg": "#F3F3F3",
        "light-text": "#666666",
      },
    },
  },
  plugins: [],
};
