/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src/*/.{js,ts,jsx,tsx}",
  // ],
  
  content: [
    "./src/components/**/*.{html,jsx}",
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: "#ABB589",
        primary: "#f0f2f5",
        tertiary: "#222222",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
