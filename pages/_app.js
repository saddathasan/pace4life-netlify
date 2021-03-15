import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import MainLayout from "@components/layouts/MainLayout";

// 'PT Sans', sans-serif;
const fonts = {
  body:
    "'PT Sans', -apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
  heading:
    "'PT Sans', -apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",

  mono: "Menlo, monospace",
};

const theme = extendTheme({
  fonts,
});
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
