import React from "react";
import { Footer } from "../components/reusables/Footer";
import { Navbar } from "../components/reusables/Navbar";
import { Homepage } from "../components/Homepage";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
};

export default Home;
