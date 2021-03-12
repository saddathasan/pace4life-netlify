import {
  Container,
  Heading,
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Stack,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link as Anchor,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

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
        <Nav />
        <Box as="main" flexGrow="1">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
}

function Nav() {
  return (
    <Box as="nav" bgColor="gray.50" py="6">
      <Container maxW="6xl">
        <Flex px="8">
          <Link href="/" passHref>
            <Anchor fontWeight="bold" fontSize="xl">
              PACE4LIFE
            </Anchor>
          </Link>

          <HStack ml="auto" spacing="10">
            <Link href="/blog" passHref>
              <Anchor>blog</Anchor>
            </Link>
            <Link href="/about" passHref>
              <Anchor>about</Anchor>
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
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box as="footer" bgColor="#768692" py="6" color="#ffffff">
      <Container maxW="6xl">
        <Flex alignItems="center">
          <Heading as="small" fontSize="sm">
            © pace4life 2021
          </Heading>

          <HStack ml="auto" spacing="10">
            <Link href="/" passHref>
              <Anchor>instagram</Anchor>
            </Link>
            <Link href="/" passHref>
              <Anchor>facebook</Anchor>
            </Link>
            <Link href="/" passHref>
              <Anchor>twitter</Anchor>
            </Link>

            <Link href="/" passHref>
              <Anchor>youtube</Anchor>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
