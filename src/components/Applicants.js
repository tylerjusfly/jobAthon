import React, { useState } from "react";
import { ApplicantsModel } from "../models";
import { ApplicantComponent } from "./ApplicantComponent";
import "../assets/css/button.css";
import { DataStore } from "@aws-amplify/datastore";
import { useParams } from "react-router-dom";

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
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Full name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Resume
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
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
                  pdf={data.resumePdf}
                />
              );
            })
          )}
        </table>
      </div>
    </>
  );
};
