import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl">
        <Heading>Contact Us </Heading>
      </Container>

      <Container maxW="4x1">
        <h3>Pace4Life</h3>
        email: lavan@pace4life.org Tel:
      </Container>
    </>
  );
}
