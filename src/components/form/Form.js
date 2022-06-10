import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import FormTitle from './FormTitle';
import Add from './Add';
import Resume from '../resume/Resume';
import JsPDF from 'jspdf';
import uniqid from 'uniqid';

const Form = () => {

  const [personal, setPersonal] = useState({
    first: '',
    last: '',
    address: '',
    phone: '',
    email: '',
    github: '',
    description: '',
  })

  const [education, setEducation] = useState([{
    school: '',
    type: '',
    subject: '',
    started: '',
    ended: '',
    id: uniqid(),
  }])

  const [experience, setExperience] = useState([{
    position: '',
    company: '',
    city: '',
    started: '',
    ended: '',
    description: '',
    id: uniqid()
  }])


  const handleParentChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const personalClone = { ...personal }
    personalClone[name] = value
    setPersonal(personalClone)
  }
  
  const handleEduChange = (e) => {
    const targetId = e.target.closest('.education-form').id;
    const targetInput = e.target.name;
    const value = e.target.value;

    setEducation(education.map((eduEntry) => {
        if (eduEntry.id !== targetId) return eduEntry;
        const eduEntryClone = { ...eduEntry }
        eduEntryClone[targetInput] = value;
        return eduEntryClone
      }))
  }

  const handleExpChange = (e) => {
    const targetId = e.target.closest('.experience-form').id
    const targetInput = e.target.name
    const value = e.target.value;

   setExperience(experience.map((expEntry) => {
        if (expEntry.id !== targetId) return expEntry;
        const expEntryClone = { ...expEntry }
        expEntryClone[targetInput] = value;
        return expEntryClone
      }))
  }
  
  const onAdd = (e) => {
    e.preventDefault()
    if (e.target.name === 'experience') {
      setExperience(experience.concat({
          position: '',
          company: '',
          city: '',
          started: '',
          ended: '',
          id: uniqid()
        }))
    } else {
      setEducation(education.concat({
          school: '',
          type: '',
          subject: '',
          started: '',
          ended: '',
          id: uniqid()
        }))
    }
  }

  const onDel = (e) => {
    e.preventDefault()
    if (e.target.name === 'experience') {
      setExperience(experience.filter(experience => experience.id !== e.target.id))
    } else {
      setEducation(education.filter(achievement => achievement.id !== e.target.id))
    }}


  const generatePDF = () => {
    const resume = new JsPDF('portrait','px', [816, 1056]);
    resume.html(document.querySelector('.resume'), {
      callback: function () {
        resume.save('Resume')
      }
    });
  }

  return (
    <div className='program'>
      <div className='form-holder'>
        <FormTitle title='Personal Information' />
        <PersonalInfo handleChange={handleParentChange} />
        <FormTitle title='Education' />
        <Education education={education} handleChange={handleEduChange} addBtn={onAdd} delBtn={onDel} />
        <Add name='education' addBtn={onAdd} />
        <FormTitle title='Experience' />
        <Experience experience={experience} handleChange={handleExpChange} addBtn={onAdd} delBtn={onDel} />
        <Add name='experience' addBtn={onAdd} />
      </div>
      <div className='resume-holder'>
        <Resume personal={personal} education={education} experience={experience} />
        <button onClick={generatePDF}>Export as PDF</button>
      </div>
    </div>
  )
}

export default React.memo(Form)