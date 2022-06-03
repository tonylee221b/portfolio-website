import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const MenuLink = ({ link, path }) => {
  const active = path === link;
  const inactiveColor = useColorModeValue("gray.200", "white");

  return (
    <NextLink href={`/${link.toLowerCase()}`} passHref>
      <Link
        fontSize="16px"
        mr={3}
        borderRadius="lg"
        px={2}
        py={1}
        color={active ? "black" : inactiveColor}
      >
        {link}
      </Link>
    </NextLink>
  );
};

export default MenuLink;
