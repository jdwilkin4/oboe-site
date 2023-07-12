import { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Heading, Center } from "@chakra-ui/react";
import { listOfConferences } from "../data/list-of-conferences";
import { Card, CardHeader, CardFooter, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Events: NextPage = () => {
  return (
    <>
      <Navbar />
      <Center>
        <Heading mt="6" mb="12" color="accentColors.purple" as="h1">
          Oboe Conferences
        </Heading>
      </Center>

      <Flex justifyContent="center" gap={10} flexWrap="wrap">
        {listOfConferences.map(({ name, url }) => (
          <Card border="2px solid purple" w="container.sm" key={name}>
            <CardHeader>
              <Heading size="md"> {name}</Heading>
            </CardHeader>
            <CardFooter>
              <Link href={url} isExternal>
                Visit site <ExternalLinkIcon mx="2px" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
};
export default Events;
