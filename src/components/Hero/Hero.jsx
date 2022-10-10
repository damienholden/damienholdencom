import React from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { Section } from "../Section";

import { HeroWrapper } from "./Hero.styles";

export const Hero = () => {
  return (
    // <HeroWrapper backgroundImage="../img/landingBG.jpg">
    <HeroWrapper backgroundColor="#78b2e5">
      <Container maxW="container.md" pt={14}>
        <Section>
          <Box display={{ md: "flex" }} pt={14}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Hi, <br />
                my name is Damien.
              </Heading>
              <p>I'm a Software Engineer from Ireland.</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderRadius="full"
                borderColor="whiteAlpha.800"
                borderWidth="2px"
                borderStyle="solid"
                boxSize="150px"
                display="inline-block"
                src="../img/profile3.jpeg"
                alt="Damien Holden"
              />
            </Box>
          </Box>
        </Section>
      </Container>
    </HeroWrapper>
  );
};
