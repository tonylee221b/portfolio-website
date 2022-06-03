import { Container, Box, Heading } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" fontSize="5xl">
        Portfolio
      </Heading>
      <Box>My Projects</Box>
    </Container>
  );
};

export default Portfolio;
