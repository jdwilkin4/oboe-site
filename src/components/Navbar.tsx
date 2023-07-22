import { Flex, Spacer, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { ChakraUIPageLink } from "./ChakraUIPageLink";

export const Navbar = () => {
  const navbarProps = {
    backgroundColor: "accentColors.purple",
    height: "50px",
  };

  return (
    <Box as="nav" {...navbarProps}>
      <UnorderedList styleType="none">
        <Flex>
          <ListItem mt="10px">
            <ChakraUIPageLink
              linkColor="white"
              link="/"
              linkText="Oboe is Cool"
              size="1.5rem"
            />
          </ListItem>
          <Spacer />
          <ListItem mt="10px" mr={10}>
            <ChakraUIPageLink
              linkColor="white"
              link="/vendors"
              linkText="Vendors"
              size="1.2rem"
            />
          </ListItem>
          <ListItem mt="10px" mr={4}>
            <ChakraUIPageLink
              linkColor="white"
              link="/events"
              linkText="Events"
              size="1.2rem"
            />
          </ListItem>
        </Flex>
      </UnorderedList>
    </Box>
  );
};
