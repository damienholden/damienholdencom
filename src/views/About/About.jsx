import React from "react";
import {
  Heading,
  Container,
  Box,
  Image,
  Link,
  Text,
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
          borderRadius="30px"
          padding={12}
          backgroundColor={useColorModeValue("#f5f5f5", "#1f2023")}
          borderColor={useColorModeValue("#f5f5f5", "#1d1d1d")}
          boxShadow="xl"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ md: "row", base: "column-reverse" }}
        >
          <Box
            maxW="xl"
            borderColor={useColorModeValue("#f5f5f5", "#1d1d1d")}
            flexShrink="10"
          >
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <p>
              My name is Damien, I'm a software engineer from Cork, Ireland. My
              primary focus is around Frontend development and all things UI
              related.
            </p>
            <br />
            <p>
              I love to problem solve and building scalable solutions with clean
              and mantainable code is a passion of mine. I'm always looking to
              improve my existing knowledge and love learning new frontend
              technologies.
            </p>
            <br />
            <p>
              Feel free to reach out on{" "}
              <Link
                href="https://www.linkedin.com/in/damienholden/"
                target="_blank"
                rel="noreferrer"
                isExternal
              >
                <Text as="b">Linkedin</Text>
              </Link>{" "}
              or via email using the{" "}
              <Link href="/contact" rel="noreferrer">
                <Text as="b">contact form</Text>.
              </Link>
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
