import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type ChakraUIPageLinkProps = {
  link: string;
  linkColor: string;
  linkText: string;
  size?: string;
};

export const ChakraUIPageLink = ({
  link,
  linkColor,
  linkText,
  size,
}: ChakraUIPageLinkProps) => {
  return (
    <NextLink href={link} passHref>
      <Link color={linkColor} fontSize={size ? size : "1rem"}>
        {linkText}
      </Link>
    </NextLink>
  );
};
export default ChakraUIPageLink;
