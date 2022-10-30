import React from "react";
import { Box, Container, Link } from "@chakra-ui/react";
import { GithubIcon, LinkedinIcon } from "@chakra-ui/icons";

import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper backgroundColor="#30465c">
      <Container maxW="container.md" p={4}>
        <Box display="flex" justifyContent="flex-end">
          <Link
            px={5}
            href="https://www.linkedin.com/in/damienholden/"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            {/* <GithubIcon /> */}Github
          </Link>
          <Link
            href="https://github.com/damienholden"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            {/* <LinkedinIcon /> */} Linkedin
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};
