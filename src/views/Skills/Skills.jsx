import React from "react";
import {
  Heading,
  Container,
  Grid,
  GridItem,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Section } from "../../components/Section/Section";
import { SkillsWrapper } from "./Skills.styles";

import skillsList from "./skillsList.json";

export const Skills = () => {
  return (
    <SkillsWrapper backgroundColor={useColorModeValue("#f5f5f5", "#202023")}>
      <Section delay={0.5} displayInViewport={true}>
        <Container pt={8} pb={8} maxW={{ md: "container.lg" }}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Section delay={0.8} displayInViewport={true}>
            <Grid
              templateColumns={{
                md: "repeat(6, 1fr)",
                sm: "repeat(4, 1fr)",
                base: "repeat(2, 1fr)",
              }}
              gap={6}
            >
              {skillsList.map((skill) => {
                return (
                  <GridItem
                    key={skill.alt}
                    h="85px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      h="65px"
                      src={skill.imgSrc}
                      alt={skill.alt}
                      title={skill.alt}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </Section>
        </Container>
      </Section>
    </SkillsWrapper>
  );
};
