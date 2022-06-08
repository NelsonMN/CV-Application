import React from 'react';
import ResumeHeader from './R-Header'
import ResumeEducation from './resume-education/R-Education'
import ResumeExperience from './resume-experience/R-Experience';

const Resume = (props) => {

    const { personal, education, experience } = props

    return (
        <div className='resume'>
            <ResumeHeader personal={personal}/>
            <div className='resume-main'>
                <ResumeEducation education={education} />
                <ResumeExperience experience={experience} />
            </div>
        </div>
    )
}

export default Resume