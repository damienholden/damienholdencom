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
            startEndDate="May 2019 - Jun 2022"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac eros ac libero malesuada pulvinar. Suspendisse mollis nulla purus, eget ultricies eros viverra sed. Donec hendrerit nulla ut metus finibus tincidunt. Nullam sit amet fringilla mi. Suspendisse sit amet purus ultrices, tempus augue non, luctus odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac eros ac libero malesuada pulvinar. Suspendisse mollis nulla purus, eget ultricies eros viverra sed. Donec hendrerit nulla ut metus finibus tincidunt. Nullam sit amet fringilla mi. Suspendisse sit amet purus ultrices, tempus augue non, luctus odio."
          />
          <TimelineItem
            title="247Meeting"
            startEndDate="November 2017 - May 2019"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac eros ac libero malesuada pulvinar. Suspendisse mollis nulla purus, eget ultricies eros viverra sed. Donec hendrerit nulla ut metus finibus tincidunt. Nullam sit amet fringilla mi. Suspendisse sit amet purus ultrices, tempus augue non, luctus odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac eros ac libero malesuada pulvinar. Suspendisse mollis nulla purus, eget ultricies eros viverra sed. Donec hendrerit nulla ut metus finibus tincidunt. Nullam sit amet fringilla mi. Suspendisse sit amet purus ultrices, tempus augue non, luctus odio."
          />
          <TimelineItem
            title="Bubble Digital"
            startEndDate="September 2015 - November 2017"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac eros ac libero malesuada pulvinar. Suspendisse mollis nulla purus, eget ultricies eros viverra sed. Donec hendrerit nulla ut metus finibus tincidunt. Nullam sit amet fringilla mi. Suspendisse sit amet purus ultrices, tempus augue non, luctus odio."
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
