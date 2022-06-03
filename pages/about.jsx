import { Container, Box, Heading, Image } from "@chakra-ui/react";
import { PageLoadDiv } from "../components/animation";
import { AboutText, AboutYear } from "../components/about";
import MyDevEnv from "../components/about/myDevEnv";

const About = () => {
  return (
    <Container maxW="container.xl">
      <PageLoadDiv>
        <Heading as="h1" fontSize="5xl">
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
            top={-130}
            right={-20}
            shadow="xl"
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
            👉 &nbsp; Expected to graduate from Seneca College
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

export default About;
