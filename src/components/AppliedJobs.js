import React, { useEffect, useState } from "react";
import { ApplicantsModel } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { usePdfLink } from "../hooks/usePdfLink";

const AppliedJobsComponents = ({ email, company, position, file }) => {
  const { signedURL } = usePdfLink(file);

  return (
    <div className="flex gap-10 justify-between bg-gray-50 border border-gray-200 rounded p-6 Alljobs">
      <div>
        <h2 className="font-bold">{email}</h2>
        <p className="details">
          {company} <span className="text-2xl font-bold">. </span>
          {position}
        </p>
      </div>
      <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
        <a href={signedURL} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </button>
    </div>
  );
};

const AppliedJobs = ({ user }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const appliedJobsFunction = async () => {
      const listOfJobs = await DataStore.query(ApplicantsModel, (c) =>
        c.applicantMail("contains", user.attributes.email)
      );

      setAppliedJobs(listOfJobs);
      setLoading(false);
    };

    appliedJobsFunction();
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading..</div>
      ) : (
        appliedJobs.map((m) => {
          return (
            <AppliedJobsComponents
              key={m.id}
              email={m.applicantMail}
              company={m.company}
              position={m.jobPosition}
              file={m.resumePdf}
            />
          );
        })
      )}
    </div>
  );
};

export default withAuthenticator(AppliedJobs);
//fetch from applicants Model and by user Logged In and display
