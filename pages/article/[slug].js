import matter from "gray-matter";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import { promises as fsPromises } from "fs";

import Head from "next/head";
import MarkdownContent from "@components/MarkdownContent";

export default function Blog({ markdownBody, frontmatter }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{frontmatter.title}</title>
      </Head>

      <Container maxW="6xl" mt="8" mb="12">
        <div>
          {/* <ReactMarkdown source={markdownBody} /> */}
          <MarkdownContent>{markdownBody}</MarkdownContent>
        </div>

        <Box>
          <Popover>
            <PopoverTrigger>
              <Button>Edit</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Edit this blog{" "}
                <Link href="">
                  <a></a>
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const content = await import(`../../_cmscontent/posts/${params.slug}.md`);
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

// Resource
// https://getstarted.sh/bulletproof-next/creating-a-markdown-blog/2
export async function getStaticPaths() {
  const markdownFiles = await fsPromises.readdir("_cmscontent/posts"); // ["defensive.md","async.md"]

  const paths = markdownFiles.map((filename) => {
    const slug = filename.replace(/.md$/, "");
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
