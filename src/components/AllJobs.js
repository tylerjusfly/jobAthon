import React from "react";
import "../assets/css/alljobs.css";
import { Link } from "react-router-dom";
import google from "../assets/images/amplify.jpg";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { Storage } from "@aws-amplify/storage";
import { JobsModel } from "../models";
import { DefaultSearchField } from "./reusables/Search";

const JobsComponent = ({ id, position, location, company, type, img }) => {
  const [image, setImage] = React.useState();
  React.useEffect(() => {
    const func = async () => {
      const accessUrl = await Storage.get(img);
      setImage(accessUrl);
    };

    func();
  }, []);

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
  const [allJobs, setAllJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

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

  //console.log(allJobs);
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
            {allJobs
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
          </>
        )

        //end
      }
    </>
  );
};
