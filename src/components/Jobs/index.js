import React from 'react';
import Job from '../Job';

const Jobs = (props) =>{
    const jobs=props.jobs
    console.log("jobs", jobs)
    const jobList = jobs.map((job)=>{
        console.log(job.fields)
        return <Job job={job.fields} />
    })
    return(
        <div>
            <h3 className="section">Experience</h3>
            <ul className="job-list">
                {jobList}
            </ul>
        </div>
        
    )
}

export default Jobs;