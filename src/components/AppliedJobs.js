import React, { useEffect, useState } from "react";
import { ApplicantModel } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppliedJobsComponents from "./AppliedJobsComponents";

const AppliedJobs = ({ user }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const appliedJobsFunction = async () => {
      const listOfJobs = await DataStore.query(ApplicantModel, (c) =>
        c.applicantMail("contains", user.attributes.email)
      );

      setAppliedJobs(listOfJobs);
      setLoading(false);
    };

    appliedJobsFunction();
  }, []);

  return (
    <div>
      <h2 className="m-4 font-bold text-center">Applied Jobs</h2>
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
