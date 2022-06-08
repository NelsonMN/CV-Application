import React from "react";

const Experience = (props) => {

    const { experience, handleChange, delBtn} = props

    return (
        experience.map((element) => {
        return (
            <form key={element.id} id={element.id} className='experience-form'>
                <input type="text" name="position" onChange={handleChange} placeholder="Title" />
                <input type="text" name="company" onChange={handleChange} placeholder="Company" />
                <input type="text" name="city" onChange={handleChange} placeholder="City" />
                <input type="text" name="started" onChange={handleChange} placeholder="Started" />
                <input type="text" name="ended" onChange={handleChange} placeholder="Ended" />
                <textarea type="text" rows="5" name="description" onChange={handleChange} placeholder="Description" />
                <button name="experience" id={element.id} onClick={delBtn} className='remove' type='button'>Remove</button>
            </form>
            )
        })      
        )
  }

export default Experience;