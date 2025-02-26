import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { type AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "../lib/registry";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default MyApp;
