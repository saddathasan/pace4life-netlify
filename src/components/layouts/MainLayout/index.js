import {
  Container,
  Heading,
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Link as Anchor,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";

import navbarContent from "../../../../layoutContents/navbar.md";
import footerContent from "../../../../layoutContents/footer.md";
import Navbar from "./components/Navbar";

function constructGrayMatter() {
  const navbarGrayMatter = matter(navbarContent);
  const footerGrayMatter = matter(footerContent);

  return {
    navbarGrayMatter,
    footerGrayMatter,
  };
}

const { navbarGrayMatter, footerGrayMatter } = constructGrayMatter();

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex direction="column" minH="100vh">
        <Navbar navbarGrayMatter={navbarGrayMatter} />
        <Box as="main" flexGrow="1">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
}

function Footer() {
  return (
    <Box as="footer" bgColor="#768692" py="6" color="#ffffff">
      <Container maxW="6xl">
        <Flex alignItems="center">
          <Heading as="small" fontSize="sm">
            {footerGrayMatter.data.copyRight}
          </Heading>

          <HStack ml="auto" spacing="8">
            {footerGrayMatter.data.footerLinks.map(({ imageLocation, url }) => {
              return (
                <Link key={imageLocation} href={url} passHref>
                  <Anchor>
                    <Image width="26px" src={imageLocation} />
                  </Anchor>
                </Link>
              );
            })}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
