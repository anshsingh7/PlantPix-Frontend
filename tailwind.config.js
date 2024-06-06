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
        mainLight: "#bcc4a1",
        main: "#abb589",
        mainDark: "#abb677",
        mainDarker:"#99a36b",
        extra:"bg-green-200",
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
