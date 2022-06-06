import React, { Component } from 'react';

class Resume extends Component {

    render() {
        const { state }  = this.props
        return (
            <div className='resume'>
                <div className='resume-header'>
                    <h1 className='name-title'>{state.personal.first} {state.personal.last}</h1>
                    <div className='resume-header-info'>
                        <ul>
                            <li><span>Address:</span> {state.personal.address}</li>
                            <li><span>Phone:</span> {state.personal.phone}</li>
                        </ul>
                        <ul>
                            <li><span>Email:</span> {state.personal.email}</li>
                            <li><span>Github:</span> {state.personal.github}</li>
                        </ul>
                    </div>
                </div>
                <div className='resume-main'>
                    <div className='resume-education'></div>
                    <div className='resume-experience'></div>
                </div>
            </div>
        )
    }
}

export default Resume