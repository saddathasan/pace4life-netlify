import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Tabs,
  TabList,
  TabPanels,
  Select,
  Tab,
  TabPanel,
  Button,
  ButtonGroup,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Donate() {
  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl" spacing="4">
        <Heading>Donate</Heading>
        <p>
          If you are willing to donate pace maker, please select your respective
          category, and fill out the forms. 
        </p>

        <ButtonGroup spacing="8">
          <Link href="/forms/patient">
            <Button colorScheme="blue" variant="solid">
              Patient or Next of Kin
            </Button>
          </Link>

          <Link href="/forms/funeralDirector">
            <Button colorScheme="blue" variant="solid">
              Funeral Director
            </Button>
          </Link>

          <Link href="/forms/nhs-medicalCompany">
            <Button colorScheme="blue" variant="solid">
              NHS or Other Medical Company
            </Button>
          </Link>
        </ButtonGroup>
      </Container>
    </>
  );
}
