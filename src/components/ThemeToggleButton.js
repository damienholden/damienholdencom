import React from "react";

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue("blackAlpha", "orange")}
      variant="outline"
      aria-label="Toggle Theme"
      onClick={() => toggleColorMode()}
    ></IconButton>
    //   <Button size="lg" onClick={() => toggleColorMode()}>
    //   Toggle Mode
    // </Button>
  );
};
