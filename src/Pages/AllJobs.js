import React, { useState } from "react";
import "../assets/css/alljobs.css";
import "../assets/css/paginate.css";
import { Link } from "react-router-dom";
import google from "../assets/images/amplify.jpg";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { JobsModel } from "../models";
import { DefaultSearchField } from "../components/reusables/Search";
import { useImageLink } from "../hooks/useImageLink";
import ReactPaginate from "react-paginate";
import { usePaginate } from "../hooks/usePaginate";

const JobsComponent = ({ id, position, location, company, type, img }) => {
  const { image } = useImageLink(img);

  return (
    <div className="flex gap-10 bg-gray-50 border border-gray-200 rounded p-6 Alljobs">
      <img src={image ? image : google} alt="design" height={50} />
      <div>
        <h2 className="font-bold">
          <Link to={`/gigs/${id}`}>{position}</Link>
        </h2>
        <p className="details">
          {location} <span className="text-2xl font-bold">. </span>
          {company} <span className="text-2xl font-bold">. </span> {type}
        </p>
      </div>
    </div>
  );
};
export const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  React.useEffect(() => {
    const AllJobs = async () => {
      const gigs = await DataStore.query(JobsModel, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      });

      setAllJobs(gigs);
      setLoading(false);
    };

    AllJobs();
  }, []);

  const { pagecount, pageChange, displayJobs } = usePaginate(allJobs);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {
        loading ? (
          <div>Loading... </div>
        ) : (
          <>
            <div className="border-solid">
              <DefaultSearchField value={searchTerm} onChange={handleChange} />
            </div>
            {displayJobs
              .filter((job) => {
                const searchvalue = searchTerm.toLowerCase();
                const title = job.position.toLowerCase();

                return title.includes(searchvalue);
              })
              .map((job) => {
                return (
                  <JobsComponent
                    key={job.id}
                    id={job.id}
                    position={job.position}
                    location={job.location}
                    img={job.logo}
                    company={job.company}
                    type={job.type}
                  />
                );
              })}
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
        )

        //end
      }
    </>
  );
};
