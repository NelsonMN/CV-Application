import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        education: []
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
        <form className='education-form'>
          <h3>Education</h3>
          <input type="text" id="schoolInput" placeholder="School Name" />
          <input type="text" id="schoolCityInput" placeholder="City" />
          <input type="text" id="degreeInput" placeholder="Degree Type" />
          <input type="text" id="subjectInput" placeholder="Subject" />
          <input type="text" id="degreeStartedInput" placeholder="Started" />
          <input type="text" id="degreeEndedInput" placeholder="Finished" />
          <button onClick={this.onDel} className='remove' type='button'>Remove</button>
          <button onClick={this.onAdd} className='add' type='submit'>Add</button>
        </form>
      )
    }
  }

export default Education