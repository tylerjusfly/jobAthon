import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { JobsModel } from "../models";
import { MyJobs } from "../components/MyJobs";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Navbar } from "../components/reusables/Navbar";
import { Footer } from "../components/reusables/Footer";

const MyPostedJobs = ({ user }) => {
  const [myJobs, setMyJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  //const { user } = useAuthenticator((context) => [context.user]);

  React.useEffect(() => {
    const MyAllJobs = async () => {
      const gigs = await DataStore.query(JobsModel, (c) => c.owner("contains", user.attributes.email));

      setMyJobs(gigs);
      setLoading(false);
    };

    MyAllJobs();
  }, []);

  console.log(myJobs);

  return (
    <>
      <Navbar />
      <h2>My Posted Jobs</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          myJobs.map((job) => {
            return (
              <MyJobs
                key={job.id}
                id={job.id}
                position={job.position}
                location={job.location}
                img={job.logo}
                company={job.company}
                type={job.type}
              />
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default withAuthenticator(MyPostedJobs);
