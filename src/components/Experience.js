import React, { Component } from "react";

class Experience extends Component {

    render() {

        const { experience, addBtn, delBtn} = this.props

        if (experience.length === 0) {
            return <button name="experience" onClick={addBtn} className='add' type='submit'>Add</button>
        } else {
            return (
            experience.map((element) => {
              return (
                <form key={element.id} className='experience-form'>
                    <input type="text" name="position" placeholder="Title" />
                    <input type="text" name="company" placeholder="Company" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="text" name="started" placeholder="Started" />
                    <input type="text" name="ended" placeholder="Ended" />
                    <button name="experience" id={element.id} onClick={delBtn} className='remove' type='button'>Remove</button>
                    <button name="experience" onClick={addBtn} className='add' type='submit'>Add</button>
                </form>
                )
            }))
        }
    }
  }

export default Experience;