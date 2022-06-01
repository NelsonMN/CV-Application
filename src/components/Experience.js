import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        position: '',
        company: '',
        city: '',
        started: '',
        finished: '',
      }

      this.onAdd = this.onAdd.bind(this);
      this.onDel = this.onDel.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }  

    handleChange(e) {
        const value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    onAdd = (e) => {
      e.preventDefault()
      console.log("Tomato Soup")
      console.log(e.target.cock)
    }
  
    onDel = (e) => {
      e.preventDefault()
      console.log("Chicken Noodle Soup")
    }

    render() {
        const { position, company, city, started, finished } = this.state

        return (
        <form className='experience-form'>
            <h3>Experience</h3>
            <input type="text" cock='234234' value={position} name="position" onChange={this.handleChange} placeholder="Title" />
            <input type="text" value={company} name="company" onChange={this.handleChange} placeholder="Company" />
            <input type="text" value={city} name="city" onChange={this.handleChange} placeholder="City" />
            <input type="text" value={started} name="started" onChange={this.handleChange} placeholder="Started" />
            <input type="text" value={finished} name="finished" onChange={this.handleChange} placeholder="Finished" />
            <button onClick={this.onDel} className='remove' type='button'>Remove</button>
            <button onClick={this.onAdd} className='add' type='submit'>Add</button>
        </form>
        )
    }
  }

export default Experience;