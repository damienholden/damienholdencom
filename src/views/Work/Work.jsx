import React from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Image,
  Link,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useWorkExperienceData } from "@hooks/useWorkExperienceData";
import { WorkWrapper } from "./Work.styles";

export const Work = () => {
  const workExperience = useWorkExperienceData();
  return (
    <WorkWrapper background={useColorModeValue("#edf2f6", "#26272b")}>
      <Container mt={20} mb={20}>
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
              key={index}
              mt={10}
              borderRadius="15px"
              padding={8}
              flexDirection={{ base: "column", sm: "row", md: "row" }}
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
                    src={role.logo.references[0].url}
                    alt={role.logo.references[0].title}
                    w="150px"
                    loading="lazy"
                  />
                </Link>
              </Box>
              <Box>
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
