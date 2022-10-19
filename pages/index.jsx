import NextLink from "next/link";
import { Box, Container, Heading, Image, Link } from "@chakra-ui/react";

import { PageLoadDiv } from "../components/animation";
import { AboutText, AboutYear } from "../components/about";
import MyDevEnv from "../components/about/myDevEnv";

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
            borderWidth={3}
            w={{ base: 280, md: 380, lg: 450 }}
            h="auto"
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

        <Heading as="h1" fontSize="5xl" mt={40}>
          About Me
        </Heading>
        <Box
          bgColor="gray.700"
          p={30}
          borderRadius={15}
          mt={20}
          shadow="lg"
          position="relative"
        >
          <Image
            src="/Tony-with-JEN-mini.png"
            alt="Tony with plane"
            maxW={400}
            borderRadius={30}
            position="absolute"
            top={{ base: 0, md: -130, lg: -130 }}
            right={{ base: 0, md: -20, lg: -20 }}
            shadow="xl"
            visibility={{ base: "hidden", md: "visible", lg: "visible" }}
          />
          <AboutYear>1998</AboutYear>
          <AboutText>
            👉 &nbsp; Born in Cheon-an(천안), South Korea &nbsp; 🇰🇷
          </AboutText>
          <AboutYear>2016</AboutYear>
          <AboutText>
            👉 &nbsp; Graduated from Kapiti College(High School) in New Zealand
            &nbsp; 🇳🇿
          </AboutText>
          <AboutYear>2016</AboutYear>
          <AboutText>
            👉 &nbsp; Acquired Private Pilot License (PPL) in New Zealand &nbsp;
            🇳🇿
          </AboutText>
          <AboutYear>2020</AboutYear>
          <AboutText>
            👉 &nbsp; Served in 3rd Airborne Special Forces Brigade, Republic of
            Korea Army (ROKA) &nbsp; 🇰🇷
          </AboutText>
          <AboutYear>2022</AboutYear>
          <AboutText>
            👉 &nbsp;Graduated Seneca College
            <span style={{ display: "block", marginLeft: "60px" }}>
              with Advanced Diploma in Computer Programming & Analysis in Canada
              &nbsp; 🇨🇦
            </span>
          </AboutText>
        </Box>
        <MyDevEnv />
      </PageLoadDiv>
    </Container>
  );
};

export default Home;
