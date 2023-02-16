import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import { Project } from "@components/Project";
import { useProjectsData } from "@hooks/useProjectsData";
import { Layout } from "@components/Layout";

const Projects = () => {
  const projects = useProjectsData();
  console.log(projects);
  return (
    <Layout pageName="Projects">
      <Container pt={20} pb={20} as="section" height="90vh">
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <p>
          Here's a small selection of projects that I'm currently working on:
        </p>
        <Container
          display="flex"
          pt={5}
          flexDirection={{ md: "row", sm: "column" }}
          alignItems={"center"}
        >
          <Grid
            templateColumns={{
              md: "repeat(3, 1fr)",
              sm: "repeat(3, 1fr)",
              base: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </Grid>
        </Container>
      </Container>
    </Layout>
  );
};

export default Projects;
