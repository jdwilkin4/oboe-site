import { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";

const Events: NextPage = () => {
  return (
    <>
      <Navbar />
      <ComingSoon title="Events" />
    </>
  );
};
export default Events;
