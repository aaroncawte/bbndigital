import { defineConfig } from "@pandacss/dev";
import { colors, breakpoints } from "./styles/theme_panda";

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints,
      tokens: {
        colors,
      },
    },
  },

  conditions: {
    extend: {
      a: "& > a",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
