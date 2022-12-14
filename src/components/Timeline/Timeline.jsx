import React from "react";
import { Box, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { TimelineItem } from "../TimelineItem/TimelineItem";

export const Timeline = () => {
  const textColor = useColorModeValue("gray.700", "white.300");

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      minWidth="0px"
      // wordWrap="break-word"
      backgroundClip="border-box"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
      borderRadius="15px"
      p="1rem"
      maxHeight="100%"
    >
      <Box
        width="100%"
        px="21px"
        ps="26px"
        pe="0px"
        mb="31px"
        position="relative"
      >
        <Flex direction="column">
          <TimelineItem
            title="Cartrawler"
            body="This is my experience with Cartrawler"
          />
          <TimelineItem
            title="247Meeting"
            body="This is my experience with 247Meeting"
          />
          <TimelineItem
            title="Bubble Digital"
            body="This is my experience with Bubble Digital"
            isFinalItem
          />

          {/* <Flex>
            <Flex direction="column" h="100%">
              <Box w="2px" bg="gray.200" h="15px"></Box>
            </Flex>
          </Flex> */}
        </Flex>
      </Box>
    </Box>
  );
};
