import React, { Component } from 'react';
import ResumeHeader from './R-Header'
import ResumeEducation from './resume-education/R-Education'
import ResumeExperience from './resume-experience/R-Experience';

class Resume extends Component {

    render() {

        const { state }  = this.props

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
}

export default Resume