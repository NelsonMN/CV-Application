import React, { Component } from "react";

class ResumeHeader extends Component {

    render() {
        const { state }  = this.props
        return (
            <div className='resume-header'>
                    <h1 className='name-title'>{state.personal.first} {state.personal.last}</h1>
                    <div className='resume-header-info'>
                        <ul>
                            <li><span>Address: </span> {state.personal.address}</li>
                            <li><span>Phone:</span> {state.personal.phone}</li>
                        </ul>
                        <ul>
                            <li><span>Email:</span> {state.personal.email}</li>
                            <li><span>GitHub:</span> {state.personal.github}</li>
                        </ul>
                    </div>
                    <h4 className="heading">Professional Summary:</h4>
                    <p><em>{state.personal.description}</em></p>
            </div>
        )
    }
}

export default ResumeHeader