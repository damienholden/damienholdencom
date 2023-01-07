import React from "react";

import { Divider } from "@chakra-ui/react";
import { Layout } from "@components/Layout/Layout";
import { Hero } from "@components/Hero/Hero";
import { About } from "@views/About";
import { Skills } from "@views/Skills";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Divider />
      <Skills />
    </Layout>
  );
};

export default Index;
