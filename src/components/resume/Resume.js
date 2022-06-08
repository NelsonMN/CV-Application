import React from 'react';
import ResumeHeader from './R-Header'
import ResumeEducation from './resume-education/R-Education'
import ResumeExperience from './resume-experience/R-Experience';

const Resume = (props) => {

    const { state } = props

    return (
        <div className='resume'>
            <ResumeHeader state={state}/>
            <div className='resume-main'>
                <ResumeEducation state={state} />
                <ResumeExperience state={state} />
            </div>
        </div>
    )
}

export default Resume