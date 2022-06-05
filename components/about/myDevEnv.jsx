import NextLink from "next/link";
import { Heading, Link, Image, Box, Flex } from "@chakra-ui/react";
import { AboutEnvDiv, AboutDeskInfo } from "./";

const MyDevEnv = () => {
  return (
    <AboutEnvDiv>
      <Heading as="h1" fontSize="5xl" mt={40} mb={20}>
        My Dev Environment
      </Heading>
      <Box>
        <Heading as="h2" fontSize="3xl" mb={14}>
          Desk Setup 🚀
        </Heading>
        <Flex bgColor="purple.900" borderRadius="15px" shadow="lg">
          <Box>
            <Image
              src="tony's room.jpeg"
              alt="Desk Setup"
              borderRadius="15px"
              w={450}
              h={420}
            />
          </Box>
          <Box mx={10} my="auto">
            <AboutDeskInfo
              title="Display :"
              desc='
                Gigabyte 34" WQHD Curved Monitor
              '
            />
            <AboutDeskInfo
              title="Keyboard :"
              desc="
                Skyloong 60% layout keyboard (brown)
              "
            />
            <AboutDeskInfo
              title="Mouse :"
              desc="
                Logitech MX Master 3 (black)
              "
            />
            <AboutDeskInfo
              title="Speakers :"
              desc="
                Bose Companion 2 Series 3
              "
            />
            <AboutDeskInfo
              title="Microphone :"
              desc="
                Joytron GM50U
              "
            />
            <AboutDeskInfo
              title="Device :"
              desc="
              Mac Mini M1
              "
            />
            <AboutDeskInfo
              title="Lighting :"
              desc="
              Led strips
              "
            />
          </Box>
        </Flex>
      </Box>
      <Box my={20}>
        <Heading as="h2" fontSize="3xl" mb={14}>
          Dev Setup 💻
        </Heading>
        <Flex bgColor="teal.700" borderRadius="15px">
          <Box mx={5} my="auto">
            <AboutDeskInfo title="Editor :" desc="Neovim" />
            <AboutDeskInfo title="My Dotfiles for neovim setup 👉" />
          </Box>
          <Box ml="auto" my="auto">
            <NextLink href="https://github.com/tonylee221b/dotfiles" passHref>
              <Link target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://gh-card.dev/repos/tonylee221b/dotfiles.svg"
                  alt="dotfiles"
                  borderRadius="10px"
                  shadow="lg"
                />
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </Box>
    </AboutEnvDiv>
  );
};

export default MyDevEnv;
