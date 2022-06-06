import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import FormTitle from './FormTitle';
import Add from './Add';
import Resume from '../resume/Resume';
import JsPDF from 'jspdf';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        first: '',
        last: '',
        address: '',
        phone: '',
        email: '',
        github: '',
        description: '',
      },
      education: [{
        school: '',
        type: '',
        subject: '',
        started: '',
        ended: '',
        id: uniqid(),
      }],

      experience: [{
        position: '',
        company: '',
        city: '',
        started: '',
        ended: '',
        description: '',
        id: uniqid(),
      }],
    };

    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handleExpChange = this.handleExpChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDel = this.onDel.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
  }

  handleParentChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    const personal = { ...this.state.personal }
    personal[name] = value
    this.setState({personal})
  }
  
  handleEduChange(e) {
    const targetId = e.target.closest('.education-form').id;
    const targetInput = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      education: prevState.education.map((eduEntry) => {
        if (eduEntry.id !== targetId) return eduEntry;
        const eduEntryClone = { ...eduEntry }
        eduEntryClone[targetInput] = value;
        return eduEntryClone
      })
    }))
  }

  handleExpChange(e) {
    const targetId = e.target.closest('.experience-form').id
    const targetInput = e.target.name
    const value = e.target.value;

    this.setState((prevState) => ({
      experience: prevState.experience.map((expEntry) => {
        if (expEntry.id !== targetId) return expEntry;
        const expEntryClone = { ...expEntry }
        expEntryClone[targetInput] = value;
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

  generatePDF() {
    const resume = new JsPDF('portrait','px', [816, 1056]);
    resume.html(document.querySelector('.resume'), {
      callback: function () {
        resume.save()
      }
    });
  }

  
  render() {

    const { personal, education, experience } = this.state;

    return (
      <div className='program'>
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
        <div className='resume-holder'>
          <Resume state={this.state}/>
          <button onClick={this.generatePDF}>Export as PDF</button>
        </div>
      </div>
    )
  }
}

export default Form