const workExperience = `query MyQuery {
    allContentfulWorkExperience {
      edges {
        node {
          id
          description
          company
          position
          startEndDate
        }
      }
    }
  }`;
