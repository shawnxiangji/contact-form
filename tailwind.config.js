/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-light": "hsl(148, 38%, 91%)",
        "green-medium": "hsl(169, 82%, 27%)",
        "grey-medium": "hsl(186, 15%, 59%)",
        "grey-darker": "hsl(187, 24%, 22%)",
        "error-red": "hsl(0, 66%, 54%)",
      },
      fontFamily: {
        karla: "Karla",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
