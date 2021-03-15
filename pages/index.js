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
  ButtonGroup,
  AspectRatio,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
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
        <Grid
          px="8"
          py="9"
          bgColor="#E8EDEE"
          templateColumns="repeat(4,1fr)"
          alignItems="center"
          gap="4"
        >
          <Image src="/vectors/logo-bbc.svg" />
          <Image src="/vectors/logo-bbc-radio.svg" />
          <Image src="/vectors/logo-bbc-news.svg" />
          <Image src="/vectors/logo-bbc-shiwali.svg" />
        </Grid>
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

            {/* <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box>
            <Box w="3xs" h="3xs" bgColor="gray.300"></Box> */}
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
