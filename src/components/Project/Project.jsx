import React from "react";
import { GridItem, Box, Text, Badge, Flex, Button } from "@chakra-ui/react";

export const Project = ({
  title,
  description,
  liveUrl,
  githubUrl,
  techStack,
}) => {
  return (
    <GridItem w="100%" m="2" mt="4" p="5" borderWidth="1px" maxW="320px">
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {title}
      </Text>
      <Text mt={2}>{description}</Text>
      <Box mt={2} align="left">
        {techStack?.map((tech, index) => (
          <Badge key={index} mr="1" colorScheme="blue">
            {tech}
          </Badge>
        ))}
      </Box>
      <Flex mt={2} align="center">
        <Button as="a" href={liveUrl} colorScheme="blue" mr={2}>
          View
        </Button>
        <Button as="a" href={githubUrl} colorScheme="blue" variant="outline">
          Source
        </Button>
      </Flex>
    </GridItem>
  );
};
