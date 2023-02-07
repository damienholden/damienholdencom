import React from "react";
import { Heading, Container, Grid, useColorModeValue } from "@chakra-ui/react";
import { Skill } from "@components/Skill/Skill";
import { motion } from "framer-motion";

import { SkillsWrapper } from "./Skills.styles";

import skillsList from "./skillsList.json";

export const Skills = () => {
  return (
    <SkillsWrapper>
      <Container mt={10} mb={10}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Grid
            borderRadius="30px"
            padding={6}
            backgroundColor={useColorModeValue("#f2f2f2", "#16151a")}
            borderColor={useColorModeValue("#f5f5f5", "#1d1d1d")}
            boxShadow="xl"
            templateColumns={{
              md: "repeat(4, 1fr)",
              sm: "repeat(4, 1fr)",
              base: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            {skillsList.slice(0, skillsList.length / 2).map((skill, index) => {
              return (
                <Skill
                  key={index}
                  alt={skill.alt}
                  src={skill.imgSrc}
                  directionLeft
                />
              );
            })}
            {skillsList
              .slice(skillsList.length / 2, skillsList.length)
              .map((skill, index) => {
                return <Skill key={index} alt={skill.alt} src={skill.imgSrc} />;
              })}
          </Grid>
        </motion.div>
      </Container>
    </SkillsWrapper>
  );
};
