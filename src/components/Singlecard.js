import React, { useState, useEffect } from "react";
import "../assets/css/single.css";
import { Tags } from "./reusables/Tags";
import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "@aws-amplify/storage";
import hashnode from "../assets/images/hashnode.jpg";
import { useNavigate } from "react-router-dom";
import { JobsModel } from "../models";
import Button from "./reusables/Button";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const Singlecard = () => {
  const [gig, setGig] = useState({});
  const [logourl, setLogoUrl] = useState("");
  const [Loading, setLoading] = useState(true);
  const { gigsId } = useParams();

  useEffect(() => {
    const func = async () => {
      const post = await DataStore.query(JobsModel, gigsId);
      const accessUrl = await Storage.get(post.logo);
      setLogoUrl(accessUrl);
      setGig(post);
      setLoading(false);
    };

    func();
  }, []);

  const { user } = useAuthenticator((context) => [context.user]);

  const isPost = user && user.attributes.email === gig.owner ? true : false;

  let btnCheck = !user || user.attributes.email === gig.owner ? true : false;

  const navigate = useNavigate();

  //delete Function
  const deleteFunc = async (id) => {
    const todelete = await DataStore.query(JobsModel, id);
    DataStore.delete(todelete);
    navigate("/");
  };

  return (
    <>
      {Loading ? (
        <h2> Loading ...</h2>
      ) : (
        <div className="p-2 mt-10 m-2 lg:m-5 lg:p-5">
          {isPost && (
            <button
              className="text-xl bg-black text-white p-2 rounded-full"
              onClick={() => {
                deleteFunc(gig.id);
              }}
            >
              <AiFillDelete />
            </button>
          )}
          <div className="flex flex-col gap-5 Single items-center justify-center md:flex-row lg:flex-col">
            <img
              className="mr-5 mb-6 lg:w-40"
              src={logourl ? logourl : hashnode}
              alt="company logo"
            />
            <div className="self-center">
              <div className="text-xl font-bold mb-4 text-center">
                {gig.position}
              </div>
              <p className="flex items-center gap-1 text-l font-bold mb-4 text-center single--company">
                <IoLocationSharp /> {gig.company} <span>. </span>
                {gig.location} <span>. </span> {gig.type}
              </p>
              <div className="border border-gray-200 w-full mb-6"></div>
            </div>
          </div>
          <div className="m-5">
            <h2 className="text-center font-bold text-l">Job Description</h2>
            <div className="mt-5 ml-5">{gig.description}</div>
            <div className="border border-gray-200 w-full mb-6 mt-6"></div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center tags">
            <ul className="flex mb-5 items-center justify-start tags">
              <h2 className="mr-5 font-bold text-l"> Tags : </h2>
              {/* Call in Tags Component */}
              {gig.tags.map((tag) => {
                return <Tags key={tag} tag={tag} />;
              })}
            </ul>
            <Button
              value={btnCheck}
              id={gig.id}
              company={gig.company}
              position={gig.position}
            />
            {/* Tags Ends here */}
          </div>
        </div>
      )}
    </>
  );
};
