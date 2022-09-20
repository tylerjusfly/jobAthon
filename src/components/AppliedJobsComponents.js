import React from "react";

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

export default AppliedJobsComponents;
