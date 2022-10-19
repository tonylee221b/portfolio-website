import NextLink from "next/link";
import { Box, Image, Link, Heading } from "@chakra-ui/react";

const PortfolioItem = ({ link, imgSrc, title, imgPos }) => {
  return (
    <Box
      my="10"
      mr={{ base: 0, md: 8, lg: 8 }}
      bgColor="blackAlpha.400"
      borderRadius="2xl"
      minW={{ base: 280, md: 340 }}
      w={{ base: "full", md: 340 }}
      shadow="xl"
      _hover={{ transform: "scale(1.02)" }}
      transition="all 200ms ease-in-out"
    >
      <NextLink href={link} passHref>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          _focus={{ outline: "none" }}
          _active={{ outline: "none" }}
        >
          <Image
            src={imgSrc}
            minW={{ base: 280, md: 340 }}
            w={{ base: "full", md: 340 }}
            h={300}
            alt="Project"
            borderRadius="2xl"
            shadow="2xl"
            objectFit="cover"
            objectPosition={imgPos}
          />
          <Heading as="h4" fontSize="2xl" textAlign="center" py={7} px={5}>
            {title}
          </Heading>
        </Link>
      </NextLink>
    </Box>
  );
};

export default PortfolioItem;
