import React from "react";
import { Singlecard } from "../components/Singlecard";
import { Navbar } from "../components/reusables/Navbar";
import { Footer } from "../components/reusables/Footer";

const SingleJob = () => {
  return (
    <>
      <Navbar />
      <Singlecard />
      <Footer />
    </>
  );
};

export default SingleJob;
