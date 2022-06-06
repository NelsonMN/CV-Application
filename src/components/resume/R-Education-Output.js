import React, { Component } from 'react';

class ResumeEducationOutput extends Component {

    render () {
        
        const { state } = this.props;

        return (
            state.education.map( (element) => {
                return (
                    <div key={element.id} id={element.id} className='education'>
                        <div className='education-info'>
                            <h4>{element.school}</h4>
                            <p>{element.type} in {element.subject}</p>
                        </div>
                        <div className='dates'>
                            <div className='start'>{element.started} - {element.ended}</div>
                        </div>
                    </div>
                )
            } )

        )
    }
}

export default ResumeEducationOutput