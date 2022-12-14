import React from "react";

import { Box } from "@chakra-ui/react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer/Footer";

import { ContentWrapper } from "./Layout.styles";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Box>
  );
};
