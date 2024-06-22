import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { theme } from "../styles/theme";
import "../styles/globals.css";

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
