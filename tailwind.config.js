/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Yellow: "#FFD700",
        White: "#FFFFFF",
        Grey: "#808080",
        Black: "#1C1C1C",
      },
    },
    screens: {
      sm: "400px",
    },
  },
  plugins: [],
};
