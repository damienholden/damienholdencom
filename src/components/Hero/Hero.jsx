import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  useColorModeValue,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { ChevronRightIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import { HeroWrapper } from "./Hero.styles";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, my name is Damien"],
    delay: 10000,
    typeSpeed: 100,
  });
  return (
    <HeroWrapper>
      {/* <Rect /> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <Container>
          <Heading as="h2" variant="page-title">
            <span>{text}</span>
            <Cursor cursorColor="#fffff" />
          </Heading>
          <motion.div
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            animate={{ y: -10, opacity: 1 }}
            initial={{ y: 0, opacity: 0 }}
          >
            <Box mt={5}>
              <Text bold="true" fontSize={20}>
                I'm a Software Engineer with over 7 years professional
                experience. My main focus is around Frontend development. I love
                to create scalable solutions and have a keen eye for creating
                beautiful UI's.
              </Text>
            </Box>
            <Box mt={5} display="flex" justifyContent="center">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ x: -10, opacity: 1 }}
              >
                <Link
                  px={5}
                  href="https://www.linkedin.com/in/damienholden/"
                  target="_blank"
                  rel="noreferrer"
                  isExternal
                >
                  <Icon
                    as={BsLinkedin}
                    w={6}
                    h={6}
                    focusable={true}
                    color={useColorModeValue("#202124", "#fafafa")}
                    _hover={{ color: "#0077B5" }}
                    transition="color 200ms ease"
                  />
                </Link>
              </motion.span>

              <motion.span
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ x: -10, opacity: 1 }}
              >
                <Link
                  href="https://github.com/damienholden"
                  target="_blank"
                  rel="noreferrer"
                  isExternal
                >
                  <Icon
                    as={BsGithub}
                    w={6}
                    h={6}
                    focusable={true}
                    color={useColorModeValue("#202124", "#fafafa")}
                    _hover={{ color: "#bdbdbd" }}
                    transition="color 200ms ease"
                  />
                </Link>
              </motion.span>
            </Box>
            <Box mt={5}>
              <Button
                rightIcon={<ChevronRightIcon />}
                as="a"
                href="../DamienHoldenCV.pdf"
                colorScheme="blue"
              >
                View my CV
              </Button>
              {/* <Button
                ml="2rem"
                as="a"
                href="/projects"
                colorScheme="blue"
                rightIcon={<ChevronRightIcon />}
              >
                Projects
              </Button> */}
            </Box>
          </motion.div>
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: -10, opacity: 1 }}
          >
            <Box mt="12" flexGrow={1}>
              <ArrowRightIcon transform="rotate(90deg)" />
            </Box>
          </motion.span>
        </Container>
      </motion.div>
    </HeroWrapper>
  );
};
