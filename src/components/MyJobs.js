import React from "react";
import { Link } from "react-router-dom";
import { Storage } from "@aws-amplify/storage";
import google from "../assets/images/amplify.jpg";

export const MyJobs = ({ id, position, location, company, type, img }) => {
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
          {company} <span className="text-2xl font-bold">. </span>
          {type} <span className="text-2xl font-bold">. </span> {location}
        </p>
      </div>
    </div>
  );
};
