import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        experience: []
      }

      this.onAdd = this.onAdd.bind(this);
      this.onDel = this.onDel.bind(this);
    }  

    onAdd = (e) => {
      e.preventDefault()
      console.log("Tomato Soup")
    }
  
    onDel = (e) => {
      e.preventDefault()
      console.log("Chicken Noodle Soup")
    }

    render() {
  
      return (
        <form className='experience-form'>
          <h3>Experience</h3>
          <input type="text" id="positionInput" placeholder="Title" />
          <input type="text" id="companyInput" placeholder="Company" />
          <input type="text" id="cityInput" placeholder="City" />
          <input type="text" id="startedInput" placeholder="Started" />
          <input type="text" id="finishedInput" placeholder="Finished" />
          <button onClick={this.onDel} className='remove' type='button'>Remove</button>
          <button onClick={this.onAdd} className='add' type='submit'>Add</button>
        </form>
      )
    }
  }

export default Experience;