import React from "react";

import { Divider } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";

const App = () => {
  return (
    <Layout>
      <Hero />
      {/* <About /> */}
      {/* <Divider /> */}
      <Experience />
    </Layout>
  );
};

export default App;
