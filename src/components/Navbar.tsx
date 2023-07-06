import { Flex, Spacer, UnorderedList, ListItem } from "@chakra-ui/react";
import { ChakraUIPageLink } from "./ChakraUIPageLink";

export const Navbar = () => {
  return (
    <nav>
      <UnorderedList styleType="none">
        <Flex>
          <ListItem>
            <ChakraUIPageLink link="/" linkText="Oboe is Cool" />
          </ListItem>
          <Spacer />
          <ListItem mr={8}>
            <ChakraUIPageLink link="/vendors" linkText="Vendors" />
          </ListItem>
          <ListItem>
            <ChakraUIPageLink link="/events" linkText="Events" />
          </ListItem>
        </Flex>
      </UnorderedList>
    </nav>
  );
};
