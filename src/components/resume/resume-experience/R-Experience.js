import React from 'react';
import ResumeExperienceOutput from './R-Experience-Output';

const ResumeExperience = (props) => {

    const { experience } = props

    return (
        <div className='resume-experience'>
            <h4 className='heading'>Experience:</h4>    
            <ResumeExperienceOutput experience={experience} />
        </div>
    )
}

export default ResumeExperience