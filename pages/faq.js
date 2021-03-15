import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import matter from "gray-matter";

import MarkdownContent from "@components/MarkdownContent";

export default function About({ markdownBody }) {
  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl" pb="6">
        <div>
          {/* <ReactMarkdown source={markdownBody} /> */}
          <MarkdownContent>{markdownBody}</MarkdownContent>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../pageContents/faq.md`);
  // const config = await import(`../../siteconfig.json`);

  const data = matter(content.default);

  return {
    props: {
      // siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
