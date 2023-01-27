import React from "react";
import {
  Heading,
  Container,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { AboutWrapper } from "./About.styles";

export const About = () => {
  return (
    <AboutWrapper>
      <motion.div
        transition={{ duration: 1.5 }}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: -10, opacity: 1 }}
        animate={{ y: -10 }}
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <Container
          maxW="container.lg"
          display="flex"
          justifyContent="space-between"
          alignItems={{ md: "center", base: "" }}
          flexDirection={{ sm: "row", base: "column-reverse" }}
        >
          <Box
            mt={6}
            padding={8}
            maxW="2xl"
            // backgroundColor={useColorModeValue("#f2f2f2", "#16151a")}
            borderColor={useColorModeValue("#f5f5f5", "#1d1d1d")}
          >
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <p>
              My name is Damien, I'm a software engineer from Cork, Ireland.
              I've been working professionally for over 7 years and my main
              focus is around frontend development.
            </p>
            <br />
            <p>
              I love to build scalable solutions with clean and mantainable
              code. I'm always looking to improve my existing knowledge and love
              learning new frontend technologies.
            </p>
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
        </Container>
      </motion.div>
    </AboutWrapper>
  );
};
