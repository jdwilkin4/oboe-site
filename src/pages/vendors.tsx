import { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";

const Vendors: NextPage = () => {
  return (
    <>
      <Navbar />
      <ComingSoon title="Vendors" />
    </>
  );
};
export default Vendors;
