import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#374151")(props),
    },
  }),
};

const fonts = {
  heading: `Roboto, sans-serif`,
  body: `Roboto, sans-serif`,
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 26,
        textDecoration: "underline",
        textDecorationColor: "#d1d1d1",
        textUnderlineOffset: 6,
        textDecorationThickness: 3,
        marginBottom: 8,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#000000", "#ffffff")(props),
    }),
  },
};

// 3. extend the theme
const theme = extendTheme({ config, components, fonts, styles });
export default theme;
