import React from "react";
import { Heading, Container, Box, useColorModeValue } from "@chakra-ui/react";
import { Section } from "../../components/Section/Section";

import { AboutWrapper } from "./About.styles";

export const About = () => {
  return (
    <AboutWrapper backgroundColor={useColorModeValue("#f5f5f5", "#202023")}>
      <Container
        maxW="container.lg"
        pt={10}
        pb={8}
        as="section"
        bg={useColorModeValue("#f5f5f5", "#202023")}
      >
        <Section delay={0.5} displayInViewport={true}>
          <Box mt={6}>
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <p>
              My name is Damien, I'm a software engineer originally from Cork,
              Ireland. I've been working professionally for over 8 years and my
              main focus is around frontend development.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              laoreet id dui rhoncus accumsan. Suspendisse pharetra pellentesque
              magna, in vehicula dolor ultricies id. Vivamus purus ex, blandit
              in elementum sit amet, pellentesque non orci. Vestibulum porta
              rutrum arcu et luctus. Nullam sit amet sapien vel justo aliquam
              vulputate. In sed commodo justo. Proin vel magna quis nunc
              pulvinar fermentum. Nullam ex tortor, iaculis ut bibendum et,
              ornare id lorem. Duis cursus iaculis eros nec finibus. Sed posuere
              vitae odio non rutrum. Duis nec posuere velit, nec posuere neque.
              Integer mattis nulla at ante semper fringilla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              laoreet id dui rhoncus accumsan. Suspendisse pharetra pellentesque
              magna, in vehicula dolor ultricies id. Vivamus purus ex, blandit
              in elementum sit amet, pellentesque non orci. Vestibulum porta
              rutrum arcu et luctus. Nullam sit amet sapien vel justo aliquam
              vulputate. In sed commodo justo. Proin vel magna quis nunc
              pulvinar fermentum. Nullam ex tortor, iaculis ut bibendum et,
              ornare id lorem. Duis cursus iaculis eros nec finibus. Sed posuere
              vitae odio non rutrum. Duis nec posuere velit, nec posuere neque.
              Integer mattis nulla at ante semper fringilla.
            </p>
          </Box>
        </Section>
      </Container>
    </AboutWrapper>
  );
};
