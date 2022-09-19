import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/amplify.jpg";
import { useImageLink } from "../hooks/useImageLink";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const MyJobs = ({
  id,
  position,
  location,
  company,
  type,
  img,
  owner,
}) => {
  const { image } = useImageLink(img);
  const { user } = useAuthenticator((context) => [context.user]);
  const isPost = user && user.attributes.email === owner ? true : false;

  return (
    <div className="flex gap-10 bg-gray-50 border border-gray-200 rounded p-6 Alljobs">
      <img src={image ? image : google} alt="design" height={50} />
      <div>
        <h2 className="font-bold">
          <Link to={`/gigs/${id}`}>{position}</Link>
        </h2>
        <p className="details">
          {company} <span className="text-2xl font-bold">. </span>
          {type} <span className="text-2xl font-bold">. </span> {location}
        </p>
      </div>
      {isPost && (
        <button className="app-btns self-end justify-self-end">
          <Link to={`/applicants/${id}`}>View Applicants</Link>
        </button>
      )}
    </div>
  );
};
