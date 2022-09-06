import React from 'react';
import '../assets/css/single.css';
import { Tags } from './reusables/Tags';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { DataStore } from '@aws-amplify/datastore';
import hashnode from '../assets/images/hashnode.jpg';
import { GIGS } from '../models';
import Button from './reusables/Button';

export const Singlecard = () => {
  const [gig, setGig] = React.useState({});
  const [Loading, setLoading] = React.useState(true);
  const { gigsId } = useParams();

  React.useEffect(() => {
    const func = async () => {
      const post = await DataStore.query(GIGS, gigsId);
      setGig(post);
      setLoading(false);
    };

    func();
  }, []);

  // console.log(gig);
  return (
    <>
      {Loading ? (
        <h2> Loading ...</h2>
      ) : (
        <div className="p-2 mt-10 m-2 lg:m-5 lg:p-5">
          <div className="flex flex-col gap-5 Single items-center justify-center md:flex-row lg:flex-col">
            <img className="mr-5 mb-6 lg:w-40" src={hashnode} alt="company logo" />
            <div className="self-center">
              <div className="text-xl font-bold mb-4 text-center"> {gig.position}</div>
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
            <Button />
            {/* Tags Ends here */}
          </div>
        </div>
      )}
    </>
  );
};

//export default withAuthenticator(Singlecard);
// {user.attributes.email}
// <button onClick={signOut}> SignOut </button>
