import React, { useEffect, useState } from "react";
import { ApplicantsModel } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";

const AppliedJobsComponents = ({ email }) => {
  return (
    <div className="flex gap-10 bg-gray-50 border border-gray-200 rounded p-6 Alljobs">
      {/* <img src={image ? image : google} alt="design" height={50} /> */}
      <div>
        <h2 className="font-bold">{email}</h2>
        <p className="details">
          devTo <span className="text-2xl font-bold">. </span> Frontend
        </p>
      </div>
      <button>View Resume</button>
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
          return <AppliedJobsComponents key={m.id} email={m.applicantMail} />;
        })
      )}
    </div>
  );
};

export default withAuthenticator(AppliedJobs);
//fetch from applicants Model and by user Logged In and display
