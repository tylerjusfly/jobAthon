import React from 'react'
import '../assets/jobs.css'
import { JobCard } from './Jobs-Card'
import { DataStore } from '@aws-amplify/datastore';
import { GIGS } from '../models';

export const Jobs = () => {
const [jobs, setJobs] = React.useState([])

React.useEffect(() => {
  const func = async() => {
    const gigs = await DataStore.query(GIGS)
    setJobs(gigs);
  }

  func();
}, []);

  return (
    <section className='Jobs'>
    <h2 className='text-2xl font-bold m-4'>Jobs</h2>
    <p className='font-bold m-4'>Find a job you love. Go to job search </p>
    <div className="lg:grid lg:grid-cols-3 gap-4 space-y-4 md:space-y-0 mx-4">
      {jobs.map(job => {
        return(
          <JobCard key={job.id} position={job.position}
          location={job.location} type={job.type} company={job.company}
          tags={job.tags}
          />
        )
      })}
    </div>
    </section>
  )
}
