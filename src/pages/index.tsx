import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Box, Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Learn about the oboe</title>
        <meta
          name="description"
          content="This is a site dedicated to all things oboe."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading
          role="heading"
          as="h1"
          color="white"
          borderRadius={4}
          mt={8}
          p={4}
          bg="#2464ec"
        >
          All things oboe
        </Heading>
      </Center>
      <Center>more details coming soon</Center>
    </div>
  );
};

export default Home;
