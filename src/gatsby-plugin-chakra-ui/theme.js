import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  // useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: "#111827",
      color: "#f2f2f2",
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
      color: "#f2f2f2",
    }),
  },
  Divider: {
    baseStyle: (props) => ({
      borderColor: "#ffffff60",
    }),
  },
  Container: {
    baseStyle: () => ({
      maxW: "container.lg",
    }),
  },
};

// 3. extend the theme
const theme = extendTheme({ config, components, fonts, styles });
export default theme;
