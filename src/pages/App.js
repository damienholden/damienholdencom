import React from "react";

import { Container } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Container maxW="container.md" pt={14}>
        <About />
      </Container>
    </Layout>
  );
};

export default App;
