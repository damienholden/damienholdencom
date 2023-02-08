import React from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Image,
  Link,
  UnorderedList,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Timeline } from "@components/Timeline";
import { motion } from "framer-motion";
import { useWorkExperienceData } from "@hooks/useWorkExperienceData";

import { WorkWrapper } from "./Work.styles";

export const Work = () => {
  const workExperience = useWorkExperienceData();
  return (
    <WorkWrapper>
      <Container
        mt={20}
        mb={20}
        padding={12}
        borderRadius="30px"
        backgroundColor={useColorModeValue("#f5f5f5", "#1f2023")}
        borderColor={useColorModeValue("#f5f5f5", "#1d1d1d")}
        boxShadow="xl"
      >
        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: 100 }}
          viewport={{ once: true }}
        >
          <Heading as="h4" variant="section-title">
            Work
          </Heading>
          {workExperience.map((role, index) => (
            <Flex
              mt={10}
              borderRadius="15px"
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
              }}
              alignItems="start"
            >
              <Box mr={6} padding={{ base: "0rem 0 1rem 0", md: "0" }}>
                <Link
                  href={role.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  isExternal
                  display="block"
                >
                  <Image
                    border="1px"
                    borderColor="#25272b"
                    src={role.logo.references[0].url}
                    alt={role.logo.references[0].title}
                    w="150px"
                    loading="lazy"
                  />
                </Link>
              </Box>
              <Box flexShrink="5">
                <Heading as="h5" size="md" mb={2}>
                  {role.company}
                </Heading>
                <Heading as="h6" size="sm" mb={2} fontWeight="normal">
                  {role.startEndDate}
                </Heading>
                <UnorderedList>
                  {role.description.map((duty, index) => (
                    <ListItem key={index}>{duty.content}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Flex>
          ))}
        </motion.div>
      </Container>
    </WorkWrapper>
  );
};
