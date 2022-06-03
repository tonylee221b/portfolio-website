import NextLink from "next/link";
import { Box, IconButton, Link } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <Box>
      <IconContext.Provider value={{ size: "100%" }}>
        <NextLink href="https://github.com/tonylee221b" passHref>
          <Link target="_blank" rel="noopener noreferrer">
            <IconButton
              aria-label="Github"
              icon={<BsGithub />}
              size="sm"
              mr={4}
              borderRadius="full"
              color="white"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </NextLink>
        <NextLink
          href="https://www.linkedin.com/in/hyeongseok-lee-tony"
          passHref
        >
          <Link target="_blank" rel="noopener noreferrer">
            <IconButton
              aria-label="Github"
              icon={<BsLinkedin />}
              size="sm"
              mr={4}
              color="white"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </NextLink>
      </IconContext.Provider>
    </Box>
  );
};

export default Contact;
