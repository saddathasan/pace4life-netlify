import matter from "gray-matter";

import { promises as fsPromises, readFileSync } from "fs";
import Link from "next/link";

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
// import MarkdownContent from "../src/components/MarkdownContent";

export default function Blog({ postList }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog</title>
      </Head>

      <Container maxW="6xl" mt="8" mb="12">
        <Anchor></Anchor>
        <Box as="header" mb="8">
          <Heading fontSize="6xl">Blog</Heading>
        </Box>
        <VStack spacing={8} align="stretch">
          {postList.map(({ post }) => {
            return (
              <Box
                p="4"
                borderRadius="md"
                border="1px solid"
                borderColor="gray.300"
              >
                <Heading fontSize="2xl" mb="1">
                  {post.title}
                </Heading>
                <Text color="blue.500" fontWeight="bold" fontSize="md" mb="4">
                  {post.author.toUpperCase()}
                </Text>

                <Text fontSize="xl" mb="6">
                  {post.preview}
                </Text>
                <Link href={`/article/${post.slug}`} passHref>
                  <Button colorScheme="blue">Read More</Button>
                </Link>
              </Box>
            );
          })}
        </VStack>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const markdownFiles = await fsPromises.readdir("public/_cmscontent/posts"); // ["defensive.md","async.md"]

  const postList = markdownFiles.map((filename) => {
    const filenameWithoutdotMd = filename.replace(/.md$/, "");

    // const content = await import(`../public/_cmscontent/posts/${slug}.md`);
    const path = `${process.cwd()}/public/_cmscontent/posts/${filenameWithoutdotMd}.md`;
    // const content = await import(`../public/_cmscontent/posts/${slug}.md`);
    const rawContent = readFileSync(path);

    return {
      post: matter(rawContent).data,
    };
  });

  console.log("postList", postList);
  /**
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      } 
   *
   */
  // const config = await import(`../../siteconfig.json`);

  return {
    props: {
      postList,
    },
  };
}
