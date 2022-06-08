import React from 'react';

const Education = (props) => {
  const { education, handleChange, delBtn } = props

  return (
    education.map((element) => {
      return (
        <form key={element.id} id={element.id} className='education-form'>
          <input type="text" name="school" onChange={handleChange} placeholder="School Name" />
          <input type="text" name="type" onChange={handleChange} placeholder="Degree Type" />
          <input type="text" name="subject" onChange={handleChange} placeholder="Subject" />
          <input type="text" name="started" onChange={handleChange} placeholder="Started" />
          <input type="text" name="ended" onChange={handleChange} placeholder="Ended" />
          <button name="education" id={element.id} onClick={delBtn} className='remove' type='button'>Remove</button>
        </form>
      )
  }))
}


export default Education