import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from './Education';
import Experience from './Experience';
import FormTitle from "./FormTitle";
import uniqid from "uniqid";

class Form extends Component {

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
      achievement: {
        id: uniqid()
      },
      education: [],
      experience: {
        id: uniqid()
      },
      experiences: [],
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDel = this.onDel.bind(this);
  }

  handleChange(e) {
    const value = e.target.value
    this.setState(
      {personal: {...this.state.personal, [e.target.name]: value}}
    )
  }
  
  onAdd(e) {
    e.preventDefault()
    if (e.target.name === 'experience') {
      this.setState({
        experiences: this.state.experiences.concat(this.state.experience),
        experience: {
          id: uniqid()
        }
      })
    } else {
      this.setState({
        education: this.state.education.concat(this.state.achievement),
        achievement: {
          id: uniqid()
        }
      })
    }
  }

  onDel(e) {
    e.preventDefault()
    if (e.target.name === 'experience') {
      this.setState({
          experiences: this.state.experiences.filter(experience => experience.id !== e.target.id)
      })
    } else {
      this.setState({
        education: this.state.education.filter(achievement => achievement.id !== e.target.id)
    })}
  }
  
  render() {

    const { personal, education, experiences } = this.state;

    return (
      <div className='form-holder'>
        <FormTitle title='Personal Information' />
        <PersonalInfo personal={personal} handleChange={this.handleChange} />
        <FormTitle title='Education' />
        <Education education={education} addBtn={this.onAdd} delBtn={this.onDel}/>
        <FormTitle title='Experience' />
        <Experience experiences={experiences} addBtn={this.onAdd} delBtn={this.onDel}/>
      </div>
    )
  }
}

export default Form