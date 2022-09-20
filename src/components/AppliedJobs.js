import React, { useEffect, useState } from "react";
import { ApplicantsModel } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppliedJobsComponents from "./AppliedJobsComponents";

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
