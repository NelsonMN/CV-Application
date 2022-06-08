import React from 'react';

const Add = (props) => {

    const {addBtn, name} = props

    return <button name={name} onClick={addBtn} className='add' type='submit'>Add</button>

}

export default Add