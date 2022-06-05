import { Container, Box, Heading, Text } from "@chakra-ui/react";
import { PageLoadDiv } from "../components/animation";
import { BounceDiv } from "../components/animation/BounceDiv";
import PortfolioItem from "../components/portfolio";

const Portfolio = () => {
  return (
    <Container maxW="container.xl">
      <BounceDiv>
        <Box
          bgColor="red.800"
          py={3}
          px={5}
          borderRadius="2xl"
          shadow="lg"
          mb={14}
          mx={24}
        >
          <Text textColor="white" fontSize="xl" textAlign="center">
            This page is still being updated!!! ⭐
          </Text>
        </Box>
      </BounceDiv>
      <PageLoadDiv>
        <Heading as="h1" fontSize="5xl">
          Portfolio
        </Heading>
        <Box mt={10}>
          <Text as="h2" fontSize="2xl">
            ‣ Personal Projects
          </Text>
          <PortfolioItem
            link="https://github.com/tonylee221b/Android-Quote-Project.git"
            imgSrc="Thumbnail - Android.png"
            title="Simple Images & Quotes generator app - Android(Java)"
            desc=""
          />
          <Text as="h2" fontSize="2xl">
            ‣ Clone Projects
          </Text>
          <PortfolioItem
            link="https://github.com/tonylee221b/CLONE__trip_advisor.git"
            imgSrc="[CLONE] Travel Advisor - Thumbnail.png"
            title="Travel Advisor Clone Project"
            desc=""
          />
          <Text as="h2" fontSize="2xl">
            ‣ Team Projects
          </Text>
          <PortfolioItem
            link="https://github.com/tonylee221b/GO_TO_THE_MOON.git"
            imgSrc="Go To the Moon Logo.png"
            title="Hackathon 2021 Winter - Seneca College"
            desc=""
          />
        </Box>
      </PageLoadDiv>
    </Container>
  );
};

export default Portfolio;
