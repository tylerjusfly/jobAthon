import React from 'react';
import '../assets/alljobs.css';
import { Link } from 'react-router-dom';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { GIGS } from '../models';

export const AllJobs = () => {
  const [allJobs, setAllJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const AllJobs = async () => {
      const gigs = await DataStore.query(GIGS, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING)
      });

      setAllJobs(gigs);
      setLoading(false);
    };

    AllJobs();
  }, []);

  console.log(allJobs);

  return (
    <>
      {
        loading ? (
          <div>Loading... </div>
        ) : (
          allJobs.map((job) => {
            return (
              <div
                className="flex gap-10 bg-gray-50 border border-gray-200 rounded p-6 Alljobs"
                key={job.id}>
                <img
                  src="https://thehub-io.imgix.net/files/s3/20220819101045-c4f5b8bf59acf0e822ee0be69f7c4f97.jpg?fit=crop&w=300&h=300&q=60"
                  alt="design"
                  height={50}
                />
                <div>
                  <h2 className="font-bold">
                    <Link to={`/gigs/${job.id}`}>{job.position}</Link>
                  </h2>
                  <p className="details">
                    {job.location} <span className="text-2xl font-bold">. </span>
                    {job.company} <span className="text-2xl font-bold">. </span> {job.type}
                  </p>
                </div>
              </div>
            );
          })
        )

        //end
      }
    </>
  );
};
