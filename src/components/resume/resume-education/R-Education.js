import React, { Component } from 'react';
import ResumeEducationOutput from './R-Education-Output';

class ResumeEducation extends Component {

    render() {
        const { state } = this.props

        return (
            <div className='resume-education'>
                <h4 className='heading'>Education:</h4>    
                <ResumeEducationOutput state={state} />
            </div>
        )
    }
}

export default ResumeEducation