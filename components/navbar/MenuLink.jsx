import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const MenuLink = ({ link }) => {
  return (
    <NextLink href={`/${link.toLowerCase()}`} passHref>
      <Link fontSize="16px" mr={3} borderRadius="lg" px={2} py={1}>
        {link}
      </Link>
    </NextLink>
  );
};

export default MenuLink;
