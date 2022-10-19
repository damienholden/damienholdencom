import React from "react";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../gatsby-plugin-chakra-ui/theme";
import Fonts from "../gatsby-plugin-chakra-ui/fonts";

// markup
const Index = () => {
  return (
    <>
      {/* {console.log("theme: ", theme)}
      here is the magic */}
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </>
  );
};

export default Index;
