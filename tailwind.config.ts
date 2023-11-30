import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-exo)"],
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        primary: "6px 6px 0 #B6FF1C",
        "primary-hover": "8px 8px 0 #B6FF1C",
        secondary: "6px 6px 0 #FF46CB",
        "secondary-hover": "8px 8px 0 #F910B8",
      },
      colors: {
        primary: "#B6FF1C",
        secondary: "#FF46CB",
        ternary: "#2A2A2A",
        white: "background-color: rgb(245 245 245 / 1);",
      },
      gridRow: {
        "grid-rows-16": "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
