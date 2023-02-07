import { useStaticQuery, graphql } from "gatsby";

export const useWorkExperienceData = () => {
  const { allContentfulWorkExperience } = useStaticQuery(
    graphql`
      query {
        allContentfulWorkExperience(sort: { fields: createdAt }) {
          nodes {
            createdAt
            company
            companyUrl
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
    `
  );
  return allContentfulWorkExperience.nodes;
};
