import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { PageLoadDiv } from "../components/animation";

const Home = () => {
  return (
    <Container maxW="container.lg">
      <PageLoadDiv>
        <Heading as="h1" fontSize="7xl" fontWeight="bold">
          Hello ✋,
        </Heading>
        <Heading as="h2" fontSize="5xl" fontWeight="bold" mb={20}>
          I&apos;m Hyeongseok(Tony) Lee
        </Heading>
        <Box mt={20}>
          <Image
            src="/Tony-in-hanbok-mini.png"
            alt="Profile"
            mx="auto"
            border="solid"
            borderColor="gray.600"
            borderRadius="2xl"
            borderWidth={10}
            boxSize={300}
          />
        </Box>
      </PageLoadDiv>
    </Container>
  );
};

export default Home;
