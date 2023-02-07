import { useStaticQuery, graphql } from "gatsby";

export const useProjectsData = () => {
  const { allContentfulProjects } = useStaticQuery(
    graphql`
      query {
        allContentfulProjects(sort: { fields: createdAt }) {
          nodes {
            title
            description
            techStack
            liveUrl
            githubUrl
          }
        }
      }
    `
  );
  return allContentfulProjects.nodes;
};
