import React from 'react';

const Job = (props) =>{
    console.log(props);
    return(
        <li className="Job" >
            <div className="job-company"><strong>{props.job.company}</strong></div>
            <div className="job-title">{props.job.jobTitle}</div>
            <div className="job-start">{props.job.dateStart} - {props.job.dateEnd}</div>
            <div className="job-desc">{props.job.descript}</div>
        </li>
    )
}

export default Job;
