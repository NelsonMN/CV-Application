import React, { Component } from 'react';

class ResumeEducationOutput extends Component {

    render () {
        
        const { state } = this.props;

        return (
            state.education.map( (element) => {
                return (
                    <div key={element.id} id={element.id} className='education'>
                        <div className='education-title'>
                            <h4>{element.school}</h4>
                            <div>{element.started} - {element.ended}</div>
                        </div>
                        <p>{element.type} in {element.subject}</p>
                    </div>
                )
            } )

        )
    }
}

export default ResumeEducationOutput