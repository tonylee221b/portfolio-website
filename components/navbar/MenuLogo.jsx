import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import Image from "next/image";
import LogoDark from "../../public/Logo_Light.png";
import LogoLight from "../../public/Logo_Dark.png";

const MenuLogo = () => {
  return (
    <NextLink href="/" passHref>
      <Link
        _hover={{ transform: "scale(1.1)" }}
        _focus={{ boxShadow: "none" }}
        mr={5}
      >
        <Image
          src={useColorModeValue(LogoLight, LogoDark)}
          width={60}
          height={60}
          alt="Logo"
        />
      </Link>
    </NextLink>
  );
};

export default MenuLogo;
