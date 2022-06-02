import React, { Component } from "react";

class Experience extends Component {

    render() {

        const { experience, handleChange, delBtn} = this.props

        return (
            experience.map((element) => {
            return (
                <form key={element.id} id={element.id} className='experience-form'>
                    <input type="text" name="position" onChange={handleChange} placeholder="Title" />
                    <input type="text" name="company" onChange={handleChange} placeholder="Company" />
                    <input type="text" name="city" onChange={handleChange} placeholder="City" />
                    <input type="text" name="started" onChange={handleChange} placeholder="Started" />
                    <input type="text" name="ended" onChange={handleChange} placeholder="Ended" />
                    <button name="experience" id={element.id} onClick={delBtn} className='remove' type='button'>Remove</button>
                </form>
                )
            })      
         )
    }
  }

export default Experience;