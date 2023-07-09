import { Center, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const ComingSoon = ({ title }: Props) => {
  return (
    <>
      <Center>
        <Heading
          role="heading"
          as="h1"
          color="white"
          borderRadius={4}
          mt={8}
          p={4}
          bg="accentColors.purple"
        >
          {title} Page
        </Heading>
      </Center>
      <Center>More details coming soon</Center>
    </>
  );
};
