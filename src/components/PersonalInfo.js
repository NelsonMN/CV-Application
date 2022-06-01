import React, { Component } from 'react'

class PersonalInfo extends Component {
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
        }
      }
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e, field) {
      
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

export default PersonalInfo
