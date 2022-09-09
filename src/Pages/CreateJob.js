import React from "react";
//import CreateJobs from '../components/CreateJobs';
import CreateJobs from "../components/CreateJobs";
import { Footer } from "../components/reusables/Footer";
import { Navbar } from "../components/reusables/Navbar";

const CreateJob = () => {
  return (
    <>
      <Navbar />
      <CreateJobs />
      <Footer />
    </>
  );
};

export default CreateJob;
