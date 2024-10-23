/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-primary": "rgb(11, 229, 138)",
        "color-primary": "rgb(21, 11, 43)",
        "color-secondary": "rgb(40, 40, 40)",
        "color-finely": "rgb(135, 135, 135)",
      },
      fontFamily: {
        Lexend: ['"Lexend"', 'serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
