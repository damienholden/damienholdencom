import React from "react";
import { Heading, Container, Box, useColorModeValue } from "@chakra-ui/react";
import { Section } from "../Section";
import { Timeline } from "../Timeline/Timeline";
import { ExperienceWrapper } from "./Experience.styles";

export const Experience = () => {
  return (
    <ExperienceWrapper backgroundColor={useColorModeValue("#fff", "#1a202c")}>
      <Container maxW="container.lg" pt={10} as="section">
        <Section delay={0.5} displayInViewport={true}>
          <Container
            maxW={{ md: "container.lg" }}
            justifyContent="space-between"
            p={0}
          >
            <Box mt={6}>
              <Heading as="h3" variant="section-title">
                Experience
              </Heading>
              <Timeline />
            </Box>
          </Container>
        </Section>
      </Container>
    </ExperienceWrapper>
  );
};
