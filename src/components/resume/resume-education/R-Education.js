import React from 'react';
import ResumeEducationOutput from './R-Education-Output';

const ResumeEducation = (props) => {

    const { state } = props

    return (
        <div className='resume-education'>
            <h4 className='heading'>Education:</h4>    
            <ResumeEducationOutput state={state} />
        </div>
    )
}

export default ResumeEducation