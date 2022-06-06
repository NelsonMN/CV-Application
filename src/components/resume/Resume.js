import React, { Component } from 'react';
import ResumeHeader from './R-Header'
import ResumeEducation from './R-Education';

class Resume extends Component {

    render() {

        const { state }  = this.props

        return (
            <div className='resume'>
                <ResumeHeader state={state}/>

                <div className='resume-main'>
                    <ResumeEducation state={state}/>
                    <div className='resume-experience'></div>
                </div>

            </div>
        )
    }
}

export default Resume