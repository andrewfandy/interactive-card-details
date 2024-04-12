/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-desktop": "url('./assets/images/bg-main-desktop.png')",
        "main-mobile": "url('./assets/images/bg-main-mobile.png')",
        "card-front": "url('./assets/images/bg-card-front.png')",
        "card-back": "url('./assets/images/bg-card-back.png",
      },
      fontFamily: {
        base: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "active-input-border": "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
        "error-input-border": "hsl(0, 100%, 66%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
