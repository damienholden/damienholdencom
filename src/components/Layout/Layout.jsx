import React from "react";

import { Box } from "@chakra-ui/react";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};
