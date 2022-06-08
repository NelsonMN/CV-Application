import React from 'react';
import ResumeEducationOutput from './R-Education-Output';

const ResumeEducation = (props) => {

    const { education } = props

    return (
        <div className='resume-education'>
            <h4 className='heading'>Education:</h4>    
            <ResumeEducationOutput education={education} />
        </div>
    )
}

export default ResumeEducation