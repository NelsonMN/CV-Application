import React from "react";

const ResumeHeader = (props) => {

    const { personal }  = props

    return (
        <div className='resume-header'>
                <h1 className='name-title'>{personal.first} {personal.last}</h1>
                <div className='resume-header-info'>
                    <ul>
                        <li><span>Address: </span> {personal.address}</li>
                        <li><span>Phone:</span> {personal.phone}</li>
                    </ul>
                    <ul>
                        <li><span>Email:</span> {personal.email}</li>
                        <li><span>GitHub:</span> {personal.github}</li>
                    </ul>
                </div>
                <h4 className="heading">Professional Summary:</h4>
                <p><em>{personal.description}</em></p>
        </div>
    )
}

export default ResumeHeader