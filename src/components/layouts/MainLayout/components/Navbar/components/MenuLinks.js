import Link from "next/link";
import {
  Box,
  Stack,
  Link as Anchor,
  Button,
  forwardRef,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

// 1. Create a custom motion component from Box
const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export default function MenuLinks({ isOpen, toggle, navbarGrayMatter }) {
  return (
    <MotionBox
      display={{ base: "block", md: "none !important" }}
      flexBasis={{ base: "100%", md: "none" }}
      initial={{ height: "0" }}
      animate={{ height: isOpen ? "auto" : "0" }}
      overflow={{ base: "hidden", md: "visible" }}
      height={{ md: "auto" }}
      transition={{ duration: 0.2 }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", , "row"]}
        pt={[4, 4, 0, 0]}
      >
        {navbarGrayMatter.data.navLinks.map(({ linkText, url }) => {
          return (
            <Link key={linkText} href={url} passHref>
              <Anchor onClick={toggle}>{linkText}</Anchor>
            </Link>
          );
        })}
        <Link href="/donate" passHref>
          <Button
            as="a"
            size="sm"
            lineHeight="10"
            bgColor="#005EB8"
            color="white"
            _hover={{
              bgColor: "#E8EDEE",
              color: "#333",
            }}
          >
            donate
          </Button>
        </Link>
      </Stack>
    </MotionBox>
  );
}
