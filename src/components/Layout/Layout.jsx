import React from "react";

import theme from "../../gatsby-plugin-chakra-ui/theme";
import Fonts from "../../gatsby-plugin-chakra-ui/fonts";

import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer/Footer";

import { Main } from "./Layout.styles";

export const Layout = ({ children }) => {
  return (
    <>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Box>
          <Navigation />
          <Main>{children}</Main>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};
