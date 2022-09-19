import React, { useEffect, useState } from "react";
import "../assets/css/jobs.css";
import JobCard from "./Jobs-Card";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { JobsModel } from "../models";

export const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const func = async () => {
      const gigs = await DataStore.query(JobsModel, Predicates.ALL, {
        page: 0,
        limit: 6,
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      });
      setJobs(gigs);
    };

    func();
  }, []);

  return (
    <section className="Jobs">
      <h2 className="text-2xl font-bold m-4">Jobs</h2>
      <p className="font-bold m-4">
        Find a job you love. Go to
        <span className="ml-1 text-sky-700">Find Jobs </span>
      </p>
      <div className="lg:grid lg:grid-cols-3 gap-4 md:grid md:grid-cols-2 space-y-4 md:space-y-0 mx-4">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              id={job.id}
              position={job.position}
              location={job.location}
              type={job.type}
              img={job.logo}
              company={job.company}
              tags={job.tags}
            />
          );
        })}
      </div>
    </section>
  );
};
