import React from "react";

import { Box } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer/Footer";

import { ContentWrapper } from "./Layout.styles";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Box>
  );
};
