import Head from "next/head";
import { Container, Box } from "@chakra-ui/react";
import Navbar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dark.Coder__</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={150}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
