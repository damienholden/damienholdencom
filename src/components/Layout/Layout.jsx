import React from "react";

import theme from "../../gatsby-plugin-chakra-ui/theme";
import Fonts from "../../gatsby-plugin-chakra-ui/fonts";

import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};
