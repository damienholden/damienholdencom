import React from "react";

import {
  Container,
  Box,
  Link,
  Image,
  Stack,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeToggleButton } from "../ThemeToggleButton";
import { MenuItem } from "./Navigation.styles";

const links = [
  {
    text: "Home",
    href: "/",
  },
  // {
  //   text: "Projects",
  //   href: "/projects",
  // },
  {
    text: "Contact",
    href: "/contact",
  },
];
export const Navigation = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = React.useRef();
  const itemColor = useColorModeValue("#000000", "#ffffff");

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202340")}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={5}
      borderBottom="solid 1px grey"
    >
      <Container
        display="flex"
        p={2}
        maxW={{ md: "container.lg" }}
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Link href="/">
            <Image
              src={useColorModeValue(
                "../img/logoLight.svg",
                "../img/logoDark.svg"
              )}
              width="200px"
              alt="Logo"
            />
          </Link>
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
          {links.map(({ text, href }) => (
            <MenuItem key={text} itemColor={itemColor}>
              <Link href={href}>{text}</Link>
            </MenuItem>
          ))}
        </Stack>
        <Box align="right" flex={{ md: 0, sm: 1 }} ml={8}>
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

                  <DrawerBody>
                    <Box display="flex" flexDirection="column">
                      {links.map(({ text, href }) => (
                        <Link key={text} href={href} pt={2}>
                          <Flex align="center">{text}</Flex>
                        </Link>
                      ))}
                    </Box>
                  </DrawerBody>

                  <DrawerFooter>
                    {/* <Button variant="outline" mr={3} onClick={onClose}>
                      {" "}
                      Close
                    </Button> */}
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
