import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from './Education';
import Experience from './Experience';


class Form extends Component {
    
    render() {
      return (
        <div className='form-holder'>
          <PersonalInfo />
          <Education />
          <Experience />
        </div>
      )
    }
}

export default Form