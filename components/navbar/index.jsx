import { Container, Box, Flex, Spacer } from "@chakra-ui/react";
import MenuLink from "./MenuLink";
import MenuLogo from "./MenuLogo";
import Contact from "../contact";

const Navbar = props => {
  return (
    <Box w="100%" bg="gray.700" position="fixed" zIndex={10} {...props}>
      <Container maxW="container.lg" py={1} shadow="lg">
        <Flex alignItems="center">
          <MenuLogo />
          <MenuLink link="About" />
          <MenuLink link="Portfolio" />
          <Spacer />
          <Contact />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
