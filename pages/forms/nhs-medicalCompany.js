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

const MedicalCompany = () => {
    return (
        <Container>
<Stack spacing="4">
                <Select placeholder="Salutation">
                  <option value="option1">Mr.</option>
                  <option value="option2">Mrs.</option>
                  <option value="option3">Ms.</option>
                </Select>

                <FormControl id="first-name" isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" />
                </FormControl>

                <FormControl id="sur-name" isRequired>
                  <FormLabel>Sur name</FormLabel>
                  <Input placeholder="Sur name" />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Company Email address</FormLabel>
                  <Input type="email" />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <Textarea
                  id="companyAddress"
                  isRequired
                  placeholder="Company Address"
                ></Textarea>

                <FormControl id="companyName" isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input placeholder="Company Name" />
                </FormControl>

                <InputGroup>
                  <InputLeftAddon children="+234" />
                  <Input type="tel" placeholder="company phone number" />
                </InputGroup>

                <Select placeholder="Country" isRequired>
                  <option value="option1">UK</option>
                  <option value="option2">USA</option>
                  <option value="option3">Germany</option>
                </Select>
              </Stack>
              <br></br>
              <Button colorScheme="teal" variant="solid">
            Submit
              </Button>
        </Container>
    );
}

export default MedicalCompany;