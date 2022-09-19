import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { JobsModel } from "../models";
import { MyJobs } from "../components/MyJobs";
import { withAuthenticator } from "@aws-amplify/ui-react";
import ReactPaginate from "react-paginate";
import { usePaginate } from "../hooks/usePaginate";

const MyPostedJobs = ({ user }) => {
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MyAllJobs = async () => {
      const gigs = await DataStore.query(JobsModel, (c) =>
        c.owner("contains", user.attributes.email)
      );

      setMyJobs(gigs);
      setLoading(false);
    };

    MyAllJobs();
  }, []);

  const { pagecount, pageChange, displayJobs } = usePaginate(myJobs);

  return (
    <>
      <h2 className="m-4 font-bold text-center">My Posted Jobs</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          displayJobs.map((job) => {
            return (
              <MyJobs
                key={job.id}
                id={job.id}
                position={job.position}
                location={job.location}
                img={job.logo}
                company={job.company}
                type={job.type}
                owner={job.owner}
              />
            );
          })
        )}
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pagecount}
        onPageChange={pageChange}
        containerClassName={"paginationBttns"}
        disabledClassName={"paginateDisabled"}
        activeClassName={"activeBttn"}
      />
    </>
  );
};

export default withAuthenticator(MyPostedJobs);
