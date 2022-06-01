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
      achievement: {
        id: uniqid()
      },
      education: [],

      experience: {
        id: uniqid()
      },
      experiences: [],
    }
    
    this.onAdd = this.onAdd.bind(this);
    this.onDel = this.onDel.bind(this);
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

    const { education, experiences } = this.state;

    return (
      <div className='form-holder'>
        <FormTitle title='Personal Information' />
        <PersonalInfo />
        <FormTitle title='Education' />
        <Education education={education} addBtn={this.onAdd} delBtn={this.onDel}/>
        <FormTitle title='Experience' />
        <Experience experiences={experiences} addBtn={this.onAdd} delBtn={this.onDel}/>
      </div>
    )
  }
}

export default Form