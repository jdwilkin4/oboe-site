import ChakraUIPageLink from "./ChakraUIPageLink";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  useMediaQuery,
  Box,
  Center,
} from "@chakra-ui/react";

export const HeroSection = () => {
  const [isTabletSizeOrLarger] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/sheet-music.jpg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100%"
      pt="50px"
      height={isTabletSizeOrLarger ? "100vh" : "50vh"}
    >
      <Card
        color="white"
        backgroundColor="accentColors.purple"
        mx="auto"
        width="40%"
      >
        <CardBody>
          <Center>
            <Heading as="h1">Learn about the oboe</Heading>
          </Center>
        </CardBody>
        <Divider />
        <CardFooter display="flex" justifyContent="center">
          <ChakraUIPageLink
            size="1.3rem"
            link="/events"
            linkText="See Oboe Events"
          />
        </CardFooter>
      </Card>
    </Box>
  );
};
