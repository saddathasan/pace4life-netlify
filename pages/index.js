import {
  Container,
  Heading,
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Input,
  Button,
  ButtonGroup,
  AspectRatio,
  Link as Anchor,
  VStack,
} from "@chakra-ui/react";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import { promises as fsPromises, readFileSync } from "fs";

import { ChevronLeft, ChevronRight } from "../src/components/Icons";

export default function Home({ frontmatter, latestBlogPosts }) {
  const featureRef = React.useRef(null);
  const publishedInRef = React.useRef(null);
  const youtubeSectionRef = React.useRef(null);
  const blogSectionRef = React.useRef(null);

  function onTapRight(ref) {
    console.log(`ref`, ref);
    ref.current.scrollBy({
      top: 0,
      left: ref.current.clientWidth,
      behavior: "smooth",
    });
  }

  function onTapLeft(ref) {
    ref.current.scrollBy({
      top: 0,
      left: -ref.current.clientWidth,
      behavior: "smooth",
    });
  }

  const {
    publishedIn,
    featuredIn,
    subscribe_section,
    blog_section,
    youtubeSection,
    secondarySection,
    heroSection,
    how_it_works_section,
  } = frontmatter;

  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl">
        {/* Hero [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box
          h="65vh"
          bg={`url(${heroSection.bannerImageLocation}) no-repeat center center/cover`}
          p="8"
          d="grid"
          gridTemplateColumns={["1fr", , "1.5fr 1fr"]}
        >
          <Box pb="12">
            {heroSection.headings.map((text) => {
              return (
                <Heading
                  key={text}
                  fontWeight="semibold"
                  size="2xl"
                  color="white"
                  mb="4"
                >
                  {text}
                </Heading>
              );
            })}
            {heroSection.texts.map((text) => {
              return (
                <Text key={text} fontSize="xl" color="white" mb="4">
                  {text}
                </Text>
              );
            })}
          </Box>
          {/* <Image src={heroSection.bannerImageLocation} /> */}
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Hero [end] */}

        {/* Learn More [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Grid
          pt="4"
          pb="12"
          px={["0", "0", "8"]}
          templateColumns={["auto", "auto", "1fr 1fr"]}
          columnGap="8"
        >
          <Box alignSelf="center">
            <Heading fontWeight="semibold" mb="4">
              {secondarySection.content.headerText}
              {/* At pace4life, we help people to{" "}
              <Heading as="span">donate pacemakers</Heading> */}
            </Heading>
            <Text fontSize="xl" mb="6">
              {secondarySection.content.paragraphText}
            </Text>
            <ButtonGroup size="lg" spacing="4">
              <Button colorScheme="blue">
                {secondarySection.content.primary_button_text}
              </Button>
              <Button colorScheme="gray">
                {secondarySection.content.secondary_button_text}
              </Button>
            </ButtonGroup>
          </Box>
          <Image
            alignSelf="flex-start"
            src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.15752-9/154413280_3996468680398557_1032265096712196446_n.png?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=V7FLhJMmu-wAX8JNq8A&_nc_ht=scontent.fdac38-1.fna&oh=19c3cfb8fc944b142e869722b3ed23b4&oe=605CCE96"
          />
        </Grid>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Learn More [end] */}

        {/* As Featured in [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box as="header" px="8" py="8" bgColor="#768692">
          <Heading fontWeight="semibold" size="lg" color="white">
            {featuredIn.headerText}
          </Heading>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* As Featured in [start] */}

        {/* Carousel [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box
          bgColor="#E8EDEE"
          px="12"
          py="4"
          overflow="hidden"
          position="relative"
        >
          <Grid
            py="4"
            gridAutoColumns="14rem"
            gridAutoFlow="column"
            gap="8"
            overflowX="scroll"
            ref={featureRef}
          >
            {featuredIn.images.map(({ imageLocation }) => {
              return (
                <AspectRatio key={imageLocation} ratio={1}>
                  <Image
                    src={imageLocation}
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </AspectRatio>
              );
            })}
          </Grid>
          <Box
            position="absolute"
            right="3"
            top="50%"
            transitionDuration="300ms"
            transform="translateY(-50%)"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapRight(featureRef)}
          >
            <ChevronRight />
          </Box>
          <Box
            position="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            transitionDuration="300ms"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapLeft(featureRef)}
          >
            <ChevronLeft />
          </Box>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Carousel [end] */}

        {/* Video [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box
          px="12"
          py="4"
          bgColor="#768692"
          overflow="hidden"
          position="relative"
        >
          <Grid
            py="4"
            gridAutoColumns={["24rem", , "32rem"]}
            gridAutoFlow="column"
            gap="8"
            overflowX="scroll"
            ref={youtubeSectionRef}
          >
            {youtubeSection.links.map((url) => {
              return (
                <AspectRatio maxW="lg" ratio={2 / 1}>
                  <iframe
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              );
            })}
          </Grid>
          <Box
            position="absolute"
            right="3"
            top="50%"
            transitionDuration="300ms"
            transform="translateY(-50%)"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapRight(youtubeSectionRef)}
          >
            <ChevronRight />
          </Box>
          <Box
            position="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            transitionDuration="300ms"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapLeft(youtubeSectionRef)}
          >
            <ChevronLeft />
          </Box>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Video [end] */}

        {/* As Featured in [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box>
          <Heading
            px="8"
            py="8"
            bgColor="#E8EDEE"
            fontWeight="semibold"
            size="lg"
          >
            {how_it_works_section.header_text}
          </Heading>
          <Image src={how_it_works_section.diagram_image_location} />
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* As Featured in [end] */}

        {/* As Published in [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box as="header" px="8" pt="8" bgColor="#768692">
          <Heading fontWeight="semibold" size="lg" color="white">
            {publishedIn.headerText}
          </Heading>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* As Published in [end] */}

        {/* Published [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box
          // bgColor="#E8EDEE"
          bgColor="#768692"
          px="12"
          py="4"
          overflow="hidden"
          position="relative"
        >
          <Grid
            py="4"
            gridAutoColumns="14rem"
            gridAutoFlow="column"
            gap="6"
            overflowX="scroll"
            ref={publishedInRef}
          >
            {publishedIn.images.map(({ url, imageLocation }) => {
              return (
                <Link href={url} passHref>
                  <Anchor
                    bgColor="#768692"
                    display="block"
                    p={4}
                    borderRadius="md"
                    transitionDuration="200ms"
                    cursor="pointer"
                    target="_blank"
                    // _hover={{
                    //   bg: "gray.200",
                    // }}
                  >
                    <AspectRatio ratio={1}>
                      <Image
                        style={{
                          objectFit: "contain",
                        }}
                        src={imageLocation}
                      />
                    </AspectRatio>
                  </Anchor>
                </Link>
              );
            })}
            {/* */}
          </Grid>
          <Box
            position="absolute"
            right="3"
            top="50%"
            transitionDuration="300ms"
            transform="translateY(-50%)"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapRight(publishedInRef)}
          >
            <ChevronRight />
          </Box>
          <Box
            position="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            transitionDuration="300ms"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapLeft(publishedInRef)}
          >
            <ChevronLeft />
          </Box>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Published [end] */}

        {/* Subscribe [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}

        <Box bgColor="#48B7E4" px="8" py="8">
          <Heading size="lg" color="white" mb="4">
            {subscribe_section.header_text}
          </Heading>
          <Flex
            alignItems={["flex-start", "flex-start", "flex-start", "stretch"]}
            maxW="xl"
            flexDirection={["column", "column", "row"]}
            style={{
              gap: "0.5rem",
            }}
          >
            <Input bgColor="white" />
            <Button
              p="0.7em 1.5em"
              width="auto"
              height="auto"
              minW="auto"
              bgColor="#005EB8"
              color="white"
              _hover={{
                bgColor: "#E8EDEE",
                color: "#333",
              }}
            >
              {subscribe_section.button_text}
            </Button>
          </Flex>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Subscribe [end] */}

        {/* Latest from Blog [start] */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        <Box as="header" px="8" py="8" bgColor="#E8EDEE" as="header">
          <Heading fontWeight="semibold" size="lg">
            {blog_section.header_text}
          </Heading>
        </Box>

        <Box px="12" py="4" overflow="hidden" position="relative">
          <Grid
            py="4"
            gridAutoColumns="14rem"
            gridAutoFlow="column"
            gap="8"
            overflowX="scroll"
            ref={blogSectionRef}
          >
            {latestBlogPosts.map(({ title, slug, created_at }) => {
              return (
                <Link href={slug ? `/article/${slug}` : "/blog"} passHref>
                  <Box
                    as="a"
                    borderRadius="md"
                    key={title}
                    w="3xs"
                    h="3xs"
                    bgColor="rgba(0,0,0,0.7)"
                    display="grid"
                    gridTemplateAreas={`"hero"`}
                    // placeItems="center"
                    overflow="hidden"
                    color="white"
                  >
                    <Grid p="4" gridArea="hero" align="flex-start">
                      <Text
                        alignSelf="flex-end"
                        fontSize="xl"
                        fontWeight="bold"
                      >
                        {title}
                      </Text>
                      <Text
                        alignSelf="flex-end"
                        fontSize="lg"
                        fontWeight="bold"
                      >
                        {created_at}
                      </Text>
                    </Grid>

                    <Image
                      src={blog_section.card_image_location}
                      gridArea="hero"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      zIndex="-1"
                    />
                  </Box>
                </Link>
              );
            })}

            <Box
              borderRadius="md"
              w="3xs"
              h="3xs"
              bgColor="whiteAlpha.400"
              borderColor="gray.300"
              borderWidth="1px"
              overflow="hidden"
              display="grid"
              placeItems="center"
            >
              <Link href="/blog" passHref>
                <Button colorScheme="blue" variant="outline">
                  More from blog
                </Button>
              </Link>
            </Box>
          </Grid>
          <Box
            position="absolute"
            right="3"
            top="50%"
            transitionDuration="300ms"
            transform="translateY(-50%)"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapRight(blogSectionRef)}
          >
            <ChevronRight />
          </Box>
          <Box
            position="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            transitionDuration="300ms"
            cursor="pointer"
            _hover={{
              transform: "translateY(-50%) scale(1.2)",
            }}
            onClick={() => onTapLeft(blogSectionRef)}
          >
            <ChevronLeft />
          </Box>
        </Box>
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* ************ */}
        {/* Latest from Blog [end] */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../pageContents/home.md`);

  const latestBlogPosts = getLatestPostList(await getPostList());
  // const config = await import(`../../siteconfig.json`);

  const data = matter(content.default);

  return {
    props: {
      // siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      latestBlogPosts,
    },
  };
}

async function getPostList() {
  const markdownFiles = await fsPromises.readdir("_cmscontent/posts"); // ["defensive.md","async.md"]

  const postList = markdownFiles.map((filename) => {
    const filenameWithoutdotMd = filename.replace(/.md$/, "");

    /**
     *
     * Use `process.cwd()` to point to the root folder
     *
     */
    const path = `${process.cwd()}/_cmscontent/posts/${filenameWithoutdotMd}.md`;
    const rawContent = readFileSync(path);

    const postContent = matter(rawContent).data;
    // const content = await import(`../public/_cmscontent/posts/${slug}.md`);
    const { created_at } = postContent;

    const parsedTime = created_at ? new Date(created_at).getTime() : 0;

    return {
      ...postContent,
      parsedTime,
    };
  });

  return postList;
}

function getLatestPostList(postList) {
  const result = postList.sort((a, b) => {
    return b.parsedTime - a.parsedTime;
  });

  return result.slice(0, 5);
}
