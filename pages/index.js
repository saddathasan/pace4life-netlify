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
} from "@chakra-ui/react";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home({ frontmatter }) {
  console.log(`frontmatter`, frontmatter);

  const featureRef = React.useRef(null);
  const publishedInRef = React.useRef(null);

  function onTapRight(ref) {
    ref.current.scrollBy({
      top: 0,
      left: ref.current.clientWidth / 2,
      behavior: "smooth",
    });
  }

  function onTapLeft(ref) {
    ref.current.scrollBy({
      top: 0,
      left: -(ref.current.clientWidth / 2),
      behavior: "smooth",
    });
  }

  const { publishedIn, featuredIn } = frontmatter;

  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl">
        {/* Hero [start] */}
        <Box bgColor="blackAlpha.600">
          <Image src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.15752-9/154501614_846398872589856_3915714248888137523_n.png?_nc_cat=106&ccb=3&_nc_sid=ae9488&_nc_ohc=8cjbdUFAdvAAX9hrl3Q&_nc_ht=scontent.fdac38-1.fna&oh=9b4ec5619fae12a56eae422f1d7ff0a6&oe=605CC008" />
        </Box>
        {/* Hero [end] */}

        {/* Learn More [start] */}
        <Grid
          pt="4"
          pb="12"
          px={["0", "0", "8"]}
          templateColumns={["auto", "auto", "1fr 1fr"]}
          columnGap="8"
        >
          <Box alignSelf="center">
            <Heading fontWeight="light" mb="4">
              At pace4life, we help people to{" "}
              <Heading as="span">donate pacemakers</Heading>
            </Heading>
            <Text fontSize="xl" mb="6">
              Sed ut perspiciatis unde omnis iste natus error sit volup tatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt.
            </Text>
            <ButtonGroup size="lg" spacing="4">
              <Button colorScheme="blue">learn more</Button>
              <Button colorScheme="gray">apply</Button>
            </ButtonGroup>
          </Box>
          <Image
            alignSelf="flex-start"
            src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.15752-9/154413280_3996468680398557_1032265096712196446_n.png?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=V7FLhJMmu-wAX8JNq8A&_nc_ht=scontent.fdac38-1.fna&oh=19c3cfb8fc944b142e869722b3ed23b4&oe=605CCE96"
          />
        </Grid>
        {/* Learn More [end] */}

        {/* As Featured in [start] */}

        <Box as="header" px="8" py="8" bgColor="#768692">
          <Heading fontWeight="semibold" size="lg" color="white">
            As Featured in
          </Heading>
        </Box>

        {/* As Featured in [start] */}

        {/* Carousel [start] */}
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
            {featuredIn.map(({ imageLocation }) => {
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
        {/* Carousel [end] */}

        {/* Video [start] */}

        <Box px="8" py="4" bgColor="#768692" overflowX="hidden">
          <Grid
            py="4"
            gridAutoColumns="32rem"
            gridAutoFlow="column"
            gap="8"
            overflowX="scroll"
          >
            <AspectRatio maxW="lg" ratio={2 / 1}>
              <iframe
                src="https://www.youtube.com/embed/Bgu9xp3sfYk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </AspectRatio>
            <AspectRatio maxW="lg" ratio={2 / 1}>
              <iframe
                src="https://www.youtube.com/embed/pE9k-U5Onpg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </AspectRatio>
          </Grid>
        </Box>
        {/* Video [end] */}

        {/* As Featured in [start] */}
        <Box>
          <Heading
            px="8"
            py="8"
            bgColor="#E8EDEE"
            fontWeight="semibold"
            size="lg"
          >
            How it works
          </Heading>
          <Image src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.15752-9/151807216_3671078216321756_3353201162234105187_n.png?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=HsTuRp-FEpUAX_hSgZN&_nc_ht=scontent.fdac38-1.fna&oh=07e6995635fa1ea3b6b8c6f65b36d5d4&oe=605AEBE8" />
        </Box>
        {/* As Featured in [end] */}
        {/* As Published in [start] */}

        <Box as="header" px="8" py="8" bgColor="#768692">
          <Heading fontWeight="semibold" size="lg" color="white">
            As Published in
          </Heading>
        </Box>

        {/* As Published in [end] */}

        {/* Published [start] */}
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
            gap="6"
            overflowX="scroll"
            ref={publishedInRef}
          >
            {publishedIn.map(({ url, imageLocation }) => {
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
        {/* Published [end] */}

        {/* Subscribe [start] */}

        <Box bgColor="#768692" px="8" py="8">
          <Heading size="lg" color="white" mb="4">
            Subscribe to our newsletter
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
              learn more
            </Button>
          </Flex>
        </Box>

        {/* Subscribe [end] */}

        {/* Latest from Blog [start] */}

        <Box as="header" px="8" py="8" bgColor="#E8EDEE" as="header">
          <Heading fontWeight="semibold" size="lg">
            Latest from the blog
          </Heading>
        </Box>

        <Box px="8" py="4" overflowX="hidden">
          <Grid
            py="4"
            gridAutoColumns="14rem"
            gridAutoFlow="column"
            gap="8"
            overflowX="scroll"
          >
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
          </Grid>
        </Box>
        {/* Latest from Blog [end] */}

        {/* Comment [start] */}
        {/* Comment [end] */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../pageContents/home.md`);
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

function ChevronRight() {
  return (
    <svg
      width="32"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="32"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      ></path>
    </svg>
  );
}
