import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { Section } from "../Section";

import { HeroWrapper } from "./About.styles";

export const About = () => {
  return (
    <Section delay={0.5}>
      <Heading as="h3" variant="section-title">
        About
      </Heading>
      <p>
        This is text test, This is text test This is text test This is text
        test. This is text test This is text test This is text test This is text
        test.
      </p>
      <p>
        This is text test, This is text test This is text test This is text
        test. This is text test This is text test This is text test This is text
        test.
      </p>
      <p>
        This is text test, This is text test This is text test This is text
        test. This is text test This is text test This is text test This is text
        test.
      </p>
    </Section>
  );
};
