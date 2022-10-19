import { Container, Box, Heading, Text, Flex } from "@chakra-ui/react";
import { PageLoadDiv } from "../components/animation";
import PortfolioItem from "../components/portfolio";

const Portfolio = () => {
  return (
    <Container maxW="container.xl">
      <PageLoadDiv>
        <Heading as="h1" fontSize="5xl">
          Portfolio
        </Heading>
        <Box mt={10}>
          <Text as="h2" fontSize="2xl">
            ‣ Personal Projects
          </Text>
          <Flex flexDir={{ base: "column", md: "row" }}>
            <PortfolioItem
              link="https://github.com/tonylee221b/Android-Quote-Project.git"
              imgSrc="Thumbnail - Android.png"
              title="Simple Images & Quotes generator app - Android(Java)"
              imgPos="top"
            />
            <PortfolioItem
              link="https://pop-chat-socket.vercel.app/"
              imgSrc="Pop-chat-thumbnail.png"
              title="Real-time chatting application - Socket.io"
              imgPos="top right"
            />
          </Flex>
          <Text as="h2" fontSize="2xl">
            ‣ Team Projects
          </Text>
          <Flex flexDir={{ base: "column", md: "row" }}>
            <PortfolioItem
              link="https://github.com/tonylee221b/GO_TO_THE_MOON.git"
              imgSrc="Go To the Moon Logo.png"
              title="Hackathon 2021 Winter - Seneca College"
              imgPos="top right"
            />
            <PortfolioItem
              link="https://the-health-cast.vercel.app/"
              imgSrc="HCA-thumbnail.png"
              title="Social Networking platform for Health Care Professionals"
              imgPos="top left"
            />
          </Flex>
        </Box>
      </PageLoadDiv>
    </Container>
  );
};

export default Portfolio;
