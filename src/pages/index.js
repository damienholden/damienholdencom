import React from "react";

import { Divider } from "@chakra-ui/react";
import { Layout } from "@components/Layout/Layout";
import { Hero } from "@components/Hero/Hero";
import { About } from "@views/About";
import { Work } from "@views/Work";
import { Skills } from "@views/Skills";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Divider />
      <Work />
      <Divider />
      <Skills />
    </Layout>
  );
};

export default Index;
