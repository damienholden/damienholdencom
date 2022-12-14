import React from "react";
import { Box, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";

export const TimelineItem = ({
  imageSrc = "../img/profile3.jpeg",
  title,
  body,
  isFinalItem,
}) => {
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.800");
  const bg = useColorModeValue("gray.50", "gray.700");
  return (
    <Flex
      alignItems="center"
      minH="150px"
      h="150px"
      justifyContent="start"
      mb="5px"
    >
      <Flex direction="column" h="100%">
        <Image
          zIndex="1"
          position="relative"
          left="-40px"
          borderRadius="full"
          borderColor="whiteAlpha.800"
          borderWidth="4px"
          borderStyle="solid"
          boxSize="80px"
          src={imageSrc}
          alt="Damien Holden"
        />
        <Box w="2px" bg="gray.200" h={isFinalItem ? "15px" : "100%"}></Box>
      </Flex>
      <Flex direction="column" justifyContent="flex-start" h="100%">
        <Text fontSize="sm" color={textColor} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {body}
        </Text>
      </Flex>
    </Flex>
  );
};
