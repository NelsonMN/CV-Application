import React, { Component } from 'react';

class Add extends Component {

    render() {
        const {addBtn, name} = this.props

        return <button name={name} onClick={addBtn} className='add' type='submit'>Add</button>
    }
}

export default Add