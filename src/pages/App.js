import React from "react";

import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Container maxW="container.md" pt={14}>
        <About />
      </Container>
    </Box>
  );
};

export default App;
