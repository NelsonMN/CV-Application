import React, { Component } from 'react';

class Resume extends Component {

    render() {
        const { state }  = this.props
        return (
            <div className='resume'>
                <div className='resume-sidebar'>
                    <h2>{state.personal.first} {state.personal.last}</h2>
                    <h4>{state.personal.address}</h4>
                    <h4>{state.personal.phone}</h4>
                </div>
                <div className='resume-main'>

                </div>
            </div>
        )
    }
}

export default Resume