import React from "react";
import { Box, Container, Link, Icon, Divider } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Divider />
      <Container maxW="container.md" p={4} mt={4}>
        <Box display="flex" justifyContent="flex-end">
          <Link
            px={5}
            href="https://www.linkedin.com/in/damienholden/"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            <Icon as={BsLinkedin} w={6} h={6} focusable={true} />
          </Link>
          <Link
            href="https://github.com/damienholden"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            <Icon as={BsGithub} w={6} h={6} focusable={true} />
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};
