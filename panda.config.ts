import { defineConfig } from "@pandacss/dev";

import { breakpoints, colors } from "./styles/theme";

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
