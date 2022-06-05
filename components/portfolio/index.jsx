import NextLink from "next/link";
import { Box, Text, Image, Link, Heading } from "@chakra-ui/react";

const PortfolioItem = ({ link, imgSrc, title, desc }) => {
  return (
    <Box my="10" bgColor="cyan.900" borderRadius="2xl">
      <NextLink href={link} passHref>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          _focus={{ outline: "none" }}
          _active={{ outline: "none" }}
        >
          <Box>
            <Image
              src={imgSrc}
              w="full"
              h={450}
              alt="Project"
              borderRadius="2xl"
              shadow="2xl"
              objectFit="contain"
            />
            <Heading as="h4" fontSize="3xl" textAlign="center" py="14">
              {title}
            </Heading>
            <Text as="p">{desc}</Text>
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};

export default PortfolioItem;
