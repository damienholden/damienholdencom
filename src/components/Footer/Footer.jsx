import React from "react";
import {
  Box,
  Container,
  Link,
  Icon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
  const date = new Date();
  return (
    <FooterWrapper backgroundColor={useColorModeValue("#edf2f6", "#111827")}>
      <Divider />
      <Container
        maxW="container.xl"
        p={4}
        mt={4}
        display="flex"
        justifyContent="space-between"
      >
        <Box>Developed by Damien Holden - {date.getFullYear()}</Box>
        <Box display="flex">
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
              _hover={{ color: "#0077B5" }}
              transition="color 200ms ease"
            />
          </Link>
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
              _hover={{ color: "#bdbdbd" }}
              transition="color 200ms ease"
            />
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};
