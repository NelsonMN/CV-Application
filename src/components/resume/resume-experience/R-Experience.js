import React, { Component } from 'react';
import ResumeExperienceOutput from './R-Experience-Output';

class ResumeExperience extends Component {

    render() {
        const { state } = this.props

        return (
            <div className='resume-experience'>
                <h4 className='heading'>Experience:</h4>    
                <ResumeExperienceOutput state={state} />
            </div>
        )
    }
}

export default ResumeExperience