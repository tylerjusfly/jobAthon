import React from "react";
import google from "../assets/images/amplify.jpg";
import { Tags } from "./reusables/Tags";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useImageLink } from "./hooks/useImageLink";

export const JobCard = ({
  id,
  position,
  location,
  type,
  company,
  tags,
  img,
}) => {
  const { image } = useImageLink(img);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-6">
      <div className="flex">
        <div>
          <h3 className="text-l mb-4 font-bold">
            <Link to={`gigs/${id}`}>{position}</Link>
          </h3>
          <div className="flex items-center gap-1 text-l font-bold mb-4 location">
            <IoLocationSharp /> {location} . {type}
          </div>
          <ul className="flex ">
            {/* Call in Tags Component */}
            {tags.map((tag) => {
              return <Tags key={tag} tag={tag} />;
            })}
          </ul>
          <div className="text-lg mt-4 company--card">
            <img
              className="company--img"
              src={image ? image : google}
              alt="company"
            />
            <span className="text-l">{company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
