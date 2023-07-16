import ChakraUIPageLink from "./ChakraUIPageLink";

export const HeroSection = () => {
  return (
    <header
      style={{
        backgroundImage: "url(/images/sheet-music.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Learn about the oboe</h1>
      <ChakraUIPageLink link="/vendors" linkText="Oboe Vendors" />
    </header>
  );
};
