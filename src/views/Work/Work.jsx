import React from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Image,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import { WorkWrapper } from "./Work.styles";

export const Work = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulWorkExperience(sort: { fields: createdAt }) {
        nodes {
          createdAt
          company
          startEndDate
          position
          logo {
            references {
              url
              title
            }
          }
          description {
            content
          }
        }
      }
    }
  `);

  const workExperience = query.allContentfulWorkExperience.nodes;

  return (
    <WorkWrapper background={useColorModeValue("#edf2f6", "#26272b")}>
      <Container maxW="container.lg" mt={20} mb={20} as="section">
        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: 100 }}
          viewport={{ once: true }}
        >
          <Box mt={14}>
            <Heading as="h4" variant="section-title">
              Work
            </Heading>
            {workExperience.map((role, index) => (
              <Flex key={index} mt={10} borderRadius="15px" padding={8}>
                <Box mr={6}>
                  <Image
                    src={role.logo.references[0].url}
                    alt={role.logo.references[0].title}
                    w="150px"
                    loading="lazy"
                  />
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
          </Box>
        </motion.div>
      </Container>
    </WorkWrapper>
  );
};
