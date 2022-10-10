import React from "react";

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeToggleButton } from "./ThemeToggleButton";
// import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202340")}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            Heading Logo
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={{ base: "none", md: 1 }}
          mt={{ base: 4, nmd: 0 }}
          justify="flex-end"
        >
          <Link>About me</Link>
          <Link>Projects</Link>
        </Stack>
        <Box align="right" flex={1}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="ghost"
                aria-label="Options"
                onClick={onOpen}
              />
              <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Menu</DrawerHeader>

                  <DrawerBody></DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      {" "}
                      Close
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
