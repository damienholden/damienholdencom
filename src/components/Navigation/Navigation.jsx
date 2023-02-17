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
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { ThemeToggleButton } from "@components/ThemeToggleButton";
import { HamburgerIcon } from "@chakra-ui/icons";
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
  const itemColor = "#ffffff";

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#111827"
      zIndex={5}
      borderBottom="solid 1px grey"
    >
      <Container
        display="flex"
        p={4}
        maxW={{ md: "container.xl" }}
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center">
          <Link href="/">
            <Image
              src={"../img/logoDark.svg"}
              width={{ base: "150px", md: "175px" }}
              height="auto"
              alt="Logo"
              loading="lazy"
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
        <Box align="right" flex={{ md: 0, base: 1 }} ml={8}>
          {/* <ThemeToggleButton /> */}
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
