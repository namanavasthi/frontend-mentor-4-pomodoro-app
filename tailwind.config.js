module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', "sans-serif"],
        roboto: ['"Roboto Slab"', "serif"],
        space: ['"Space Mono"', "monospace"],
      },
      colors: {
        red: "#F87070",
        purple: "#D881F8",
        blue: {
          dark: "#161932",
          medium: "#1E213F",
          light: "#70F3F8",
        },
        neutral: {
          100: "#D7E0FF",
          200: "#EFF1FA",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
