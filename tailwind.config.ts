/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: {
          "100": "#113ca5",
          "200": "#0c2e82",
          "300": "#0b2b82",
          "400": "#0e0359",
        },
        slateblue: "#123eaa",
        mediumslateblue: {
          "100": "#9480ff",
          "200": "#7b66ff",
          "300": "#6f5cf9",
        },
        cornflowerblue: {
          "100": "#a39adf",
          "200": "#8b81d0",
        },
        lavender: {
          "100": "#f1efff",
          "200": "#efebff",
          "300": "#e3ebff",
        },
        steelblue: "#6d82b4",
        ghostwhite: {
          "100": "#f7f5ff",
          "200": "#f3f1ff",
        },
        darkslateblue: "#3d589b",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e6e6",
          "300": "#ddd",
        },
        thistle: {
          "100": "#d8d1ff",
          "200": "#d4cdff",
        },
        lightsteelblue: {
          "100": "#a1adcb",
          "200": "#9eabcd",
        },
        whitesmoke: "#ededed",
      },
      spacing: {},
      fontFamily: {
        "bai-jamjuree": "'Bai Jamjuree'",
        outfit: "Outfit",
      },
      borderRadius: {
        "26xl": "45px",
        "27xl": "46px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      xs: "12px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};