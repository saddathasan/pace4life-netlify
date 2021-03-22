import { Box, Container, Flex, Link as Anchor } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import DesktopNav from "./components/DesktopNav";
import MenuLinks from "./components/MenuLinks";

export default function Navbar({ navbarGrayMatter }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(`navbarGrayMatter, working??`, navbarGrayMatter);

  return (
    <Box as="nav" bgColor="gray.50">
      <Container maxW="6xl">
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          py={6}
        >
          <Link href={navbarGrayMatter.data.navbar_section.logo.url} passHref>
            <Anchor fontWeight="bold" fontSize="xl">
              <img
                width="140"
                src={navbarGrayMatter.data.navbar_section.logo.imageLocation}
                alt="Pace4Life Logo"
              />
            </Anchor>
          </Link>

          <DesktopNav
            navbarGrayMatter={navbarGrayMatter}
            toggle={toggle}
            isOpen={isOpen}
          />

          <MenuLinks
            navbarGrayMatter={navbarGrayMatter}
            toggle={toggle}
            isOpen={isOpen}
          />
          {/* <HStack ml="auto" spacing="10">
            {navbarGrayMatter.data.navbar.navLinks.map(({ linkText, url }) => {
              return (
                <Link key={linkText} href={url} passHref>
                  <Anchor>{linkText}</Anchor>
                </Link>
              );
            })}
            <Link href="/blog" passHref>
              <Anchor>blog</Anchor>
            </Link>
            <Link href="/research" passHref>
              <Anchor>research</Anchor>
            </Link>
            <Link href="/faq" passHref>
              <Anchor>faq</Anchor>
            </Link>

            <Menu isLazy>
              <MenuButton>
                <Anchor>about</Anchor>
              </MenuButton>

              <MenuList>
                <MenuItem>
                  <Link href="/about" passHref>
                    <Anchor>About Us</Anchor>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/our-mission" passHref>
                    <Anchor>Our Mission</Anchor>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/our-approach" passHref>
                    <Anchor>Our Approach</Anchor>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Link href="/history" passHref>
              <Anchor>history</Anchor>
            </Link>
            <Link href="/contact" passHref>
              <Anchor>contact</Anchor>
            </Link>

            <Link href="/donate" passHref>
              <Button
                as="a"
                size="sm"
                lineHeight="10"
                bgColor="#005EB8"
                color="white"
                _hover={{
                  bgColor: "#E8EDEE",
                  color: "#333",
                }}
              >
                donate
              </Button>
            </Link>
          </HStack> */}
        </Flex>
      </Container>
    </Box>
  );
}
