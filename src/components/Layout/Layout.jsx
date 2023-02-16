import React from "react";

import theme from "../../gatsby-plugin-chakra-ui/theme";
import Fonts from "../../gatsby-plugin-chakra-ui/fonts";
import { useStaticQuery, graphql } from "gatsby";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Navigation } from "@components/Navigation";
import { Footer } from "../Footer";

import { LayoutWrapper } from "./Layout.style";

export const Layout = ({ pageName, children }) => {
  const query = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  const { author } = query.site.siteMetadata;

  return (
    <LayoutWrapper>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <main>
          <title>
            {pageName} | {author}
          </title>
          <Navigation />
          {children}
        </main>
        <Footer />
      </ChakraProvider>
    </LayoutWrapper>
  );
};
