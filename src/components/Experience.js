import React, { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
    constructor(props) {
      super(props)

    //   this.handleChange = this.handleChange.bind(this);
    }  

    // handleChange(e) {
    //     const value = e.target.value
    //     this.setState({
    //         [e.target.name]: value
    //     })
    // }

    render() {
        const { experiences, addBtn, delBtn} = this.props
        
        if (experiences.length === 0) {
            return <button key={uniqid()} name="experience" onClick={addBtn} className='add' type='submit'>Add</button>
        } else {
            return (
                experiences.map((experience) => {
                    return (
                        <form key={experience.id} className='experience-form'>
                            <input type="text" /*value={position}*/ name="position" placeholder="Title" />
                            <input type="text" /*value={company}*/ name="company" placeholder="Company" />
                            <input type="text" /*value={city}*/ name="city" placeholder="City" />
                            <input type="text" /*value={started}*/ name="started" placeholder="Started" />
                            <input type="text" /*value={finished}*/ name="finished" placeholder="Finished" />
                            <button name="experience" id={experience.id} onClick={delBtn} className='remove' type='button'>Remove</button>
                            <button name="experience" onClick={addBtn} className='add' type='submit'>Add</button>
                        </form>
                    )
                })
            )
        }

        
    }
  }

export default Experience;