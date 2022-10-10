import React from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { Section } from "../Section";

import { HeroWrapper } from "./About.styles";

export const About = () => {
  return (
    <Section delay={0.5}>
      <Heading as="h3" variant="section-title">
        About
      </Heading>
    </Section>
  );
};
