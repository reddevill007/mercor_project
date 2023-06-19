import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Mercor Project</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
