module.exports = {
  siteMetadata: {
    title: "Personal Website",
    author: "Damien Holden",
    siteUrl: `https://www.damienholden.com`,
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    "gatsby-plugin-styled-components",
  ],
};

// require("dotenv").config({
//   path: `.env`,
// });
