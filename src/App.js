import React, { Component } from 'react';
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personal: {
        first: '', 
        last: '', 
        address: '',
        phone: '',
        email: '',
        description: ''
      },
      education: [],
      experience: []
    }
  }

  render () {
    return (
      <div className='app'>
        <Header />
        <Form education={this.state.education} experience={this.state.experience} />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <h1 className='title'>RESUME ARCHITECT</h1>
    )
  }
}

class Form extends Component {
  constructor(props) {
    super(props)

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
      <div className='form-holder'>
        <PersonalInfo />
        <Education add={this.onAdd} del={this.onDel} />
        <Experience add={this.onAdd} del={this.onDel} />
      </div>
    )
  }
}

class PersonalInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  
    return (
      <form className='personal-form'>
        <h3>Personal Information</h3>
        <input type="text" id="firstInput" placeholder="First name" />
        <input type="text" id="lastInput" placeholder="Last name" />
        <input type="text" id="addressInput" placeholder="Address" />
        <input type="text" id="phoneInput" placeholder="Phone" />
        <input type="text" id="emailInput" placeholder="Email" />
        <textarea type="text" rows="5" id="descriptionInput" placeholder="Description" />
      </form>
    )
  }
}

class Education extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    const { del, add } = this.props;

    return (
      <form className='education-form'>
        <h3>Education</h3>
        <input type="text" id="schoolInput" placeholder="School Name" />
        <input type="text" id="schoolCityInput" placeholder="City" />
        <input type="text" id="degreeInput" placeholder="Degree Type" />
        <input type="text" id="subjectInput" placeholder="Subject" />
        <input type="text" id="degreeStartedInput" placeholder="Started" />
        <input type="text" id="degreeEndedInput" placeholder="Finished" />
        <button onClick={del} className='remove' type='button'>Remove</button>
        <button onClick={add} className='add' type='submit'>Add</button>
      </form>
    )
  }
}

class Experience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const { del, add } = this.props;

    return (
      <form className='experience-form'>
        <h3>Experience</h3>
        <input type="text" id="positionInput" placeholder="Title" />
        <input type="text" id="companyInput" placeholder="Company" />
        <input type="text" id="cityInput" placeholder="City" />
        <input type="text" id="startedInput" placeholder="Started" />
        <input type="text" id="finishedInput" placeholder="Finished" />
        <button onClick={del} className='remove' type='button'>Remove</button>
        <button onClick={add} className='add' type='submit'>Add</button>
      </form>
    )
  }
}




export default App;
