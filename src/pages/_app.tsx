import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  grey: "#0a0a23",
  white: "#ffffff",
  accentColors: {
    purple: "#5a01a7",
    yellow: "#4d3800",
    blue: "#002ead",
    green: "#00471b",
    red: "#ff0000",
  },
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

export const theme = extendTheme({
  colors,
  fontWeights,
  breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
