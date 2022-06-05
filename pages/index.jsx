import NextLink from "next/link";
import { Box, Container, Heading, Image, Link } from "@chakra-ui/react";
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
        <Box mt={20} display="flex">
          <NextLink href="/portfolio" passHref>
            <Link
              bgColor="cyan.500"
              px={8}
              py={5}
              fontSize={18}
              fontWeight="bold"
              _hover={{ bgColor: "cyan.900" }}
              borderRadius="2xl"
              mx="auto"
            >
              View My Portfolio
            </Link>
          </NextLink>
        </Box>
      </PageLoadDiv>
    </Container>
  );
};

export default Home;
