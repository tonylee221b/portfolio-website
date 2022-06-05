import NextLink from "next/link";
import { Box, Container, Text, Link, Heading } from "@chakra-ui/react";

const Error = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize="5xl">
          Sorry...
          <br /> I do not have anything to show here...
        </Heading>
        <Text mt={32} as="h4" fontSize="3xl">
          Go back &nbsp;
          <NextLink href="/" passHref>
            <Link textColor="teal.400">Home</Link>
          </NextLink>
        </Text>
      </Container>
    </Box>
  );
};

export default Error;
