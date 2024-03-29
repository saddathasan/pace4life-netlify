import {
  Container,
  Heading,
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Stack,
  Link as Anchor,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";

// import navbarContent from "../../../../layoutContents/navbar.md";
// import footerContent from "../../../../layoutContents/footer.md";

import homeContent from "../../../../pageContents/home.md";
import Navbar from "./components/Navbar";

function constructGrayMatter() {
  const homeGraymatter = matter(homeContent);

  return homeGraymatter;
}

// function constructGrayMatter() {
//   const navbarGrayMatter = matter(navbarContent);
//   const footerGrayMatter = matter(footerContent);

//   return {
//     navbarGrayMatter,
//     footerGrayMatter,
//   };
// }

// const { navbarGrayMatter, footerGrayMatter } = constructGrayMatter();
const homeGraymatter = constructGrayMatter();

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
        <Navbar navbarGrayMatter={homeGraymatter} />
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
        <Stack
          spacing={5}
          alignItems={["stretch", "center"]}
          direction={["column", "row"]}
          justifyContent={[, "space-between"]}
        >
          <Heading as="small" fontSize="sm">
            {homeGraymatter.data.footer_section.copyRight}
          </Heading>

          <HStack spacing="8">
            {homeGraymatter.data.footer_section.footerLinks.map(
              ({ imageLocation, url }) => {
                return (
                  <Link key={imageLocation} href={url} passHref>
                    <Anchor target="_blank">
                      <Image width="26px" src={imageLocation} />
                    </Anchor>
                  </Link>
                );
              }
            )}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
