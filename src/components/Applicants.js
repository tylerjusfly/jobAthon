import React, { useState } from "react";
import { ApplicantsModel } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { useParams } from "react-router-dom";

const ApplicantComponent = ({ fullname, linkedIn, email }) => {
  return (
    <div className="p-5 mb-5 Applicant">
      <h2>{fullname}</h2>
      <span>{linkedIn}</span>
      <span>{email}</span>
    </div>
  );
};

export const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const { gigsId } = useParams();
  console.log(gigsId);

  React.useEffect(() => {
    const ListOfApplicants = async () => {
      const lists = await DataStore.query(ApplicantsModel, (c) =>
        c.jobId("contains", gigsId)
      );

      setApplicants(lists);
      setLoading(false);
    };

    ListOfApplicants();
  }, []);

  //fetch data by id from db
  return (
    <>
      <h2 className="m-4 font-bold text-center">Applicants Data</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          applicants.map((data) => {
            return (
              <ApplicantComponent
                key={data.id}
                fullname={data.fullname}
                linkedIn={data.linkedIn}
                email={data.applicantMail}
              />
            );
          })
        )}
      </div>
    </>
  );
};
