import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#", "#26272b")(props),
      color: mode("#202124", "#f2f2f2")(props),
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
      color: mode("#225662", "#f2f2f2")(props),
    }),
  },
  Divider: {
    baseStyle: (props) => ({
      borderColor: mode("#00000060", "#ffffff60")(props),
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
