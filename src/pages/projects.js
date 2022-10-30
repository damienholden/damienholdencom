import React from "react";
import {
  Box,
  Container,
  Button,
  Image,
  Flex,
  Text,
  Badge,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <Container maxW="container.md" pt={20}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
          id dui rhoncus accumsan. Suspendisse pharetra pellentesque magna, in
          vehicula dolor ultricies id. Vivamus purus ex, blandit in elementum
          sit amet, pellentesque non orci. Vestibulum porta rutrum arcu et
          luctus. Nullam sit amet sapien vel justo aliquam vulputate. In sed
          commodo justo.
        </p>
        <Container
          display="flex"
          pt={5}
          flexDirection={{ md: "row", sm: "column" }}
          alignItems={"center"}
        >
          <Box
            m="2"
            mt="4"
            p="5"
            maxW="320px"
            borderWidth="1px"
            backgroundColor={useColorModeValue("", "")}
            color={useColorModeValue("", "")}
          >
            {/* <Image borderRadius="md" src="https://bit.ly/2k1H1t6" /> */}
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Giphy Search
            </Text>
            <Text mt={2}>
              I've always been interested in the Giphy API from the day I
              started using their application. I wanted to see if I could use
              their API make something that's quick and easy to use as an
              alternative to their own website.
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
            <Flex mt={2} align="center">
              <Button as="a" href="#" colorScheme="blue" mr={2}>
                View
              </Button>
              <Button as="a" href="#" colorScheme="blue" variant="outline">
                Source
              </Button>
            </Flex>
          </Box>
          <Box m="2" mt="4" p="5" maxW="320px" borderWidth="1px">
            {/* <Image borderRadius="md" src="https://bit.ly/2k1H1t6" /> */}
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              ToDo list
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
                Socket.IO
              </Badge>
            </Flex>
            <Flex mt={2} align="center">
              <Button as="a" href="#" colorScheme="blue" mr={2}>
                View
              </Button>
              <Button as="a" href="#" colorScheme="blue" variant="outline">
                Source
              </Button>
            </Flex>
          </Box>
        </Container>
        <Container
          display="flex"
          pt={5}
          flexDirection={{ md: "row", sm: "column" }}
          alignItems={"center"}
        >
          <Box m="2" mt="4" p="5" maxW="320px" borderWidth="1px">
            {/* <Image borderRadius="md" src="https://bit.ly/2k1H1t6" /> */}
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Chat Application
            </Text>
            <Text mt={2}>
              I've always been interested in the Giphy API from the day I
              started using their application. I wanted to see if I could use
              their API make something that's quick and easy to use as an
              alternative to their own website.
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
            <Flex mt={2} align="center">
              <Button as="a" href="#" colorScheme="blue" mr={2}>
                View
              </Button>
              <Button as="a" href="#" colorScheme="blue" variant="outline">
                Source
              </Button>
            </Flex>
          </Box>
          <Box m="2" mt="4" p="5" maxW="320px" borderWidth="1px">
            {/* <Image borderRadius="md" src="https://bit.ly/2k1H1t6" /> */}
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Worldie Clone
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
                Socket.IO
              </Badge>
            </Flex>
            <Flex mt={2} align="center">
              <Button as="a" href="#" colorScheme="blue" mr={2}>
                View
              </Button>
              <Button as="a" href="#" colorScheme="blue" variant="outline">
                Source
              </Button>
            </Flex>
          </Box>
        </Container>
      </Container>
    </Layout>
  );
};

export default Projects;
