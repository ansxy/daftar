/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        mytheme: {
          primary: "#64bddb",

          secondary: "#471f93",

          accent: "#378fa3",

          neutral: "#261C27",

          "base-100": "#E1EAEF",

          info: "#3F91E4",

          success: "#126349",

          warning: "#F0B828",

          error: "#FC2E27",
        },
      },
    ],
  },
  theme: {
    screens: {
      smartphone: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
