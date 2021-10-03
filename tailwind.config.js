module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "font-kumbh",
      "font-roboto",
      "font-space",
      "bg-red",
      "bg-purple",
      "bg-blue-light",
      "text-red",
      "text-purple",
      "text-blue-light",
    ],
  },
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
        gradient: {
          from: "#272B4F",
          to: "#0E112A",
        },
        neutral: {
          100: "#D7E0FF",
          200: "#EFF1FA",
          300: "#E3E1E1",
        },
      },
      boxShadow: {
        oval: "-50px -50px 100px #272C5A, 50px 50px 100px #121530;",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        80: "80px",
        100: "100px",
      },
      lineHeight: {
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        25: "25px",
        30: "30px",
        40: "40px",
        99: "99px",
        124: "124px",
      },
      letterSpacing: {
        "4m": "-4px",
        "5m": "-5px",
        default: "0px",
        5: "5px",
        13: "13px",
        15: "15px",
      },
      spacing: {
        30: "30px",
        40: "40px",
        45: "45px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        100: "100px",
        144: "144px",
        266: "266px",
        300: "300px",
        366: "366px",
        410: "410px",
        "100p": "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};