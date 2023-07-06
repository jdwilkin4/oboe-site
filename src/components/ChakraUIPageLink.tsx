import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type ChakraUIPageLinkProps = {
  link: string;
  linkText: string;
};

export const ChakraUIPageLink = ({ link, linkText }: ChakraUIPageLinkProps) => {
  return (
    <NextLink href={link} passHref>
      <Link>{linkText}</Link>
    </NextLink>
  );
};
export default ChakraUIPageLink;
