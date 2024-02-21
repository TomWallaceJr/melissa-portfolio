import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["nord"],
    defaultTheme: "nord",
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["lato", "sans-serif"],
      },
      boxShadow: {
        "bottom-border": "0 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};
export default config;
