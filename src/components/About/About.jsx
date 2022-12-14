import React from "react";
import { Heading, Container, Box } from "@chakra-ui/react";
import { Section } from "../Section";

export const About = () => {
  return (
    <Container maxW="container.lg" pt={8} pb={8} as="section">
      <Section delay={0.5} displayInViewport={true}>
        <Container
          maxW={{ md: "container.lg" }}
          justifyContent="space-between"
          p={0}
        >
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
            <br />
            <div>Add social links here</div>
            <div>Add link to projects section</div>
          </Box>
        </Container>
      </Section>
    </Container>
  );
};
