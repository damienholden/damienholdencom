import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Section } from "../Section";

import { HeroWrapper } from "./Hero.styles";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi my name is Damien", "I'm a Software Engineer"],
    loop: true,
    delay: 10000,
    typeSpeed: 100,
  });

  return (
    <HeroWrapper
      backgroundColor={useColorModeValue("#f5f5f5", "#202023")}
      waveColor={useColorModeValue("#f5f5f5", "#202023")}
    >
      <Section>
        <Container
          maxW={{ md: "container.lg" }}
          display="flex"
          justifyContent="space-between"
          alignItems={{ md: "center", base: "" }}
          flexDirection={{ sm: "row", base: "column-reverse" }}
        >
          <Box mt="5" flexShrink={9}>
            <Heading as="h2" variant="page-title">
              <span>{text}</span>
              <Cursor cursorColor="#fffff" />
            </Heading>
            <Section delay={0.5} displayInViewport={true}>
              <Box mt={5}>
                <Text bold="true" fontSize={20}>
                  I've been working professionally for over 7 years and my main
                  focus is around frontend development. I love to create
                  scalable solutions and have a keen eye for creating beautiful
                  UI's.
                </Text>
              </Box>
              <Box mt={5}>
                {/* <Button
                  as="a"
                  href="/projects"
                  colorScheme="blue"
                  rightIcon={<ChevronRightIcon />}
                >
                  Projects
                </Button> */}
                {/* <Button
                  rightIcon={<ChevronRightIcon />}
                  as="a"
                  href="#"
                  colorScheme="blue"
                  variant="outline"
                  ml={5}
                >
                  View my CV
                </Button> */}
              </Box>
            </Section>
          </Box>
          <Box
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
            display={{ base: "none", sm: "block" }}
          >
            <Image
              borderRadius="full"
              borderColor="whiteAlpha.800"
              borderWidth="2px"
              borderStyle="solid"
              boxSize="250px"
              display="inline-block"
              src="../img/profile.jpeg"
              alt="Damien Holden"
            />
          </Box>
          {/* <Box mt="5" flexGrow={1} rotate={180}>
              <ArrowRightIcon />
            </Box> */}
        </Container>
      </Section>
    </HeroWrapper>
  );
};
