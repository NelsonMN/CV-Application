import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from './Education';
import Experience from './Experience';
import FormTitle from "./FormTitle";
import Add from "./Add"
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
      
      education: [{
        school: '',
        city: '',
        type: '',
        subject: '',
        started: '',
        ended: '', 
        id: uniqid()
      }],

      experience: [{
        position: '',
        company: '',
        city: '',
        started: '',
        ended: '',     
        id: uniqid()
      }],
    }

    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handleExpChange = this.handleEduChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDel = this.onDel.bind(this);
  }

  handleParentChange(e) {
    const value = e.target.value
    this.setState({
      personal: {...this.state.personal, [e.target.name]: value}
    })
  }
  
  handleEduChange(e) {
    const targetId = e.target.closest('.education-form').id
    const targetInput = e.target.name

    this.setState((prevState) => ({
      education: prevState.education.map((eduEntry) => {
        if (eduEntry.id !== targetId) return eduEntry;
        const eduEntryClone = { ...eduEntry }
        eduEntryClone[targetInput] = e.target.value;
        return eduEntryClone
      })
    }))
  }

  handleExpChange(e) {
    const targetId = e.target.closest('.experience-form').id
    const targetInput = e.target.name

    this.setState((prevState) => ({
      experience: prevState.experience.map((expEntry) => {
        if (expEntry.id !== targetId) return expEntry;
        const expEntryClone = { ...expEntry }
        expEntryClone[targetInput] = e.target.value;
        return expEntryClone
      })
    }))
  }
  
  onAdd(e) {
    e.preventDefault()
    if (e.target.name === 'experience') {
      this.setState({
        experience: this.state.experience.concat({
          position: '',
          company: '',
          city: '',
          started: '',
          ended: '',
          id: uniqid()
        }),
      })

    } else {
      this.setState({
        education: this.state.education.concat({
          school: '',
          city: '',
          type: '',
          subject: '',
          started: '',
          ended: '',
          id: uniqid()
        }),
      })
    }
  }

  onDel(e) {
    e.preventDefault()
    if (e.target.name === 'experience') {
      this.setState({
        experience: this.state.experience.filter(experience => experience.id !== e.target.id)
      })
    } else {
      this.setState({
        education: this.state.education.filter(achievement => achievement.id !== e.target.id)
    })}
  }

  
  render() {

    const { personal, education, experience } = this.state;

    return (
      <div className='form-holder'>
        <FormTitle title='Personal Information' />
        <PersonalInfo personal={personal} handleChange={this.handleParentChange} />
        <FormTitle title='Education' />
        <Education education={education} handleChange={this.handleEduChange} addBtn={this.onAdd} delBtn={this.onDel} />
        <Add name='education' addBtn={this.onAdd} />
        <FormTitle title='Experience' />
        <Experience experience={experience} handleChange={this.handleExpChange} addBtn={this.onAdd} delBtn={this.onDel} />
        <Add name='experience' addBtn={this.onAdd} />
      </div>
    )
  }
}

export default Form