import React from 'react';
import { Navbar } from '../components/Navbar';
import { AllJobs } from '../components/AllJobs';
import { Footer } from '../components/Footer';

const FindJobs = () => {
  return (
    <>
      <Navbar />
      <AllJobs />
      <Footer />
    </>
  );
};

export default FindJobs;
