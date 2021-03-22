import { Box, HStack, Link as Anchor, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Hamburger({ toggle, isOpen, navbarGrayMatter }) {
  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        color="gray.700"
        onClick={toggle}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <HStack display={{ base: "none", md: "flex" }} spacing={8} align="center">
        {navbarGrayMatter.data.navbar_section.navLinks.map(
          ({ linkText, url }) => {
            return (
              <Link key={linkText} href={url} passHref>
                <Anchor>{linkText}</Anchor>
              </Link>
            );
          }
        )}
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
      </HStack>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      width="36"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="36"
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}
