import React, { Component } from 'react';

class FormTitle extends Component {
    render() {
        return <h3 className='form-title'>{this.props.title}</h3>
    }
}

export default FormTitle