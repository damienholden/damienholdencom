import React from "react";
import {
  Box,
  Container,
  Center,
  Image,
  Flex,
  Text,
  Badge,
  Heading,
} from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { About } from "../components/About";

const Projects = () => {
  return (
    <Layout>
      <Container maxW="container.md" pt={14}>
        {/* <About /> */}
        <Heading as="h2">Projects</Heading>
        <Container
          display="flex"
          pt={5}
          flexDirection={{ md: "row", sm: "column" }}
          alignItems={"center"}
        >
          <Box m="2" mt="4" p="5" maxW="320px" borderWidth="1px">
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Giphy Search
            </Text>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Flex mt={2} align="center">
              <Badge mr="1" colorScheme="blue">
                React
              </Badge>
              <Badge mr="1" colorScheme="blue">
                Styled Components
              </Badge>
              <Badge colorScheme="blue">Plus</Badge>
            </Flex>
          </Box>
          <Box m="2" mt="4" p="5" maxW="320px" borderWidth="1px">
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Chat App
            </Text>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Flex mt={2} align="center">
              <Badge mr="1" colorScheme="blue">
                React
              </Badge>
              <Badge mr="1" colorScheme="blue">
                Styled Components
              </Badge>
              <Badge colorScheme="blue">Plus</Badge>
            </Flex>
          </Box>
        </Container>
      </Container>
    </Layout>
  );
};

export default Projects;
