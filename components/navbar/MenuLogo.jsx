import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import Image from "next/image";
import LogoLight from "../../public/Logo_Light.png";

const MenuLogo = () => {
  return (
    <NextLink href="/" passHref>
      <Link
        _hover={{ transform: "scale(1.1)" }}
        _focus={{ boxShadow: "none" }}
        mr={5}
      >
        <Image src={LogoLight} width={60} height={60} alt="Logo" />
      </Link>
    </NextLink>
  );
};

export default MenuLogo;
