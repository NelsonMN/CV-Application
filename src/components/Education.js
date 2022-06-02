import React, { Component } from "react";

class Education extends Component {

  render() {

    const { education, handleChange, addBtn, delBtn } = this.props

    if (education.length === 0) {
      return <button name="education" onClick={addBtn} className='add' type='submit'>Add</button>
    } else {
      return (
        education.map((element) => {
          return (
            <form key={element.id} className='education-form'>
              <input type="text" value={education.school} name="school" onChange={handleChange} placeholder="School Name" />
              <input type="text" value={education.city} name="city" onChange={handleChange} placeholder="City" />
              <input type="text" value={education.type} name="type" onChange={handleChange} placeholder="Degree Type" />
              <input type="text" value={education.subject} name="subject" onChange={handleChange} placeholder="Subject" />
              <input type="text" value={education.started} name="started" onChange={handleChange} placeholder="Started" />
              <input type="text" value={education.ended} name="ended" onChange={handleChange} placeholder="Ended" />
              <button name="education" id={element.id} onClick={delBtn} className='remove' type='button'>Remove</button>
              <button name="education" onClick={addBtn} className='add' type='submit'>Add</button>
            </form>
          )
       }))
    }
  }
}


export default Education