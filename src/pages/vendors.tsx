import React, { useState } from "react";
import { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { listOfVendors } from "../data/list-of-vendors";
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Text,
  Link,
  Flex,
  Select,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import filterVendors from "../../utils/filter-vendors";

const Vendors: NextPage = () => {
  const [filteredVendorsList, setFilteredVendorsList] = useState(listOfVendors);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filtered = filterVendors(listOfVendors, event.target.value);
    setFilteredVendorsList(filtered);
  };
  return (
    <>
      <Navbar />
      <Center>
        <Heading mt="6" mb="12" color="accentColors.purple" as="h1">
          Oboe Vendors
        </Heading>
      </Center>

      <Select
        onChange={(e) => handleFilterChange(e)}
        mx="auto"
        mb={10}
        w="200px"
        id="vendor-types"
        bg="accentColors.purple"
        borderColor="grey"
        color="white"
      >
        <option value="all">All Vendors</option>
        <option value="music">Sheet music</option>
        <option value="instruments">Instruments</option>
        <option value="reeds">Reeds</option>
        <option value="misc">Misc.</option>
      </Select>

      <Flex justifyContent="center" gap={10} flexWrap="wrap">
        {filteredVendorsList.map(({ name, url, description }) => (
          <Card border="2px solid purple" w="container.sm" key={name}>
            <CardHeader>
              <Heading size="md"> {name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{description}</Text>
            </CardBody>
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
export default Vendors;
