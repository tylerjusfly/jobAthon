import React from 'react'
import '../assets/jobs.css'
import { JobCard } from './Jobs-Card'

export const Jobs = () => {
  return (
    <section className='Jobs'>
    <h2>Jobs</h2>
    <p>Find a job you love. Go to job search </p>
    <JobCard/>
    </section>
  )
}
