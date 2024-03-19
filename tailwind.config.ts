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
        main: "#163020",
        background: "#EEF0E5",
        // main: " #F6F1EE",
        // background: "#113946",
      },
    },
  },
  plugins: [],
};
export default config;
