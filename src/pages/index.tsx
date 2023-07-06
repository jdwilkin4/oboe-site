import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";

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
      <main>
        <Navbar />
        <ComingSoon title="All things oboe" />
      </main>
    </div>
  );
};

export default Home;
