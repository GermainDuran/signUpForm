import React from 'react';

const Experience = (props) =>{
    return(
        <div className="body_container">
            <p className="job_name"><strong>{props.name}</strong></p>
            <p className="job_name"><strong>{props.position}</strong></p>
            <p className="job_desc">{props.Description}</p>
            <p>{props.children}</p>
        </div>

    )
}

export default Experience;
