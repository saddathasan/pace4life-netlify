import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Donate() {
  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl">
        <Heading>Donate</Heading>
      </Container>
    </>
  );
}
