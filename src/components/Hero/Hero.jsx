import React from "react";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Section } from "../Section";

import { HeroWrapper } from "./Hero.styles";

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi my name is Damien",
      "I'm a Software Engineer",
      "Scroll to learn more about me",
    ],
    loop: true,
    delay: 10000,
    typeSpeed: 100,
  });

  return (
    <HeroWrapper backgroundColor="#78b2e5">
      <Container maxW="container.md" pt={14}>
        <Section>
          <Box display={"flex"} flexDirection="column" alignItems="center">
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
                boxSize="200px"
                display="inline-block"
                src="../img/profile3.jpeg"
                alt="Damien Holden"
              />
            </Box>
            <Box mt="5" flexGrow={1}>
              <Heading as="h2" variant="page-title">
                <span>{text}</span>
                <Cursor cursorColor="#fffff" />
              </Heading>
            </Box>
            {/* <Box mt="5" flexGrow={1} rotate={180}>
              <ArrowRightIcon />
            </Box> */}
          </Box>
        </Section>
      </Container>
    </HeroWrapper>
  );
};
