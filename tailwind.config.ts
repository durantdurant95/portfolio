import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        celtic: {
          "50": "#ecfff4",
          "100": "#d3ffe6",
          "200": "#aaffce",
          "300": "#69ffaa",
          "400": "#21ff7d",
          "500": "#00f25b",
          "600": "#00ca48",
          "700": "#009e3b",
          "800": "#007a33",
          "900": "#02652d",
          "950": "#003916",
        },
      },
    },
  },
  plugins: [],
};
export default config;
