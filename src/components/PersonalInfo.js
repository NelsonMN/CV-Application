import React, { Component } from 'react'

class PersonalInfo extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //     first: '', 
    //     last: '', 
    //     address: '',
    //     phone: '',
    //     email: '',
    //     description: ''
    //     }

    //     this.handleChange = this.handleChange.bind(this);
    // }
  
    // handleChange(e) {
    //     const value = e.target.value
    //     this.setState({
    //         [e.target.name]: value
    //     })
    // }
    
    render() {
        const { personal, handleChange } = this.props

        return (
        <form className='personal-form'>
            <input type="text" value={personal.first} name="first" onChange={handleChange} placeholder="First name" />
            <input type="text" value={personal.last} name="last" onChange={handleChange} placeholder="Last name" />
            <input type="text" value={personal.address} name="address" onChange={handleChange} placeholder="Address" />
            <input type="text" value={personal.phone} name="phone" onChange={handleChange} placeholder="Phone" />
            <input type="text" value={personal.email} name="email" onChange={handleChange} placeholder="Email" />
            <textarea type="text" value={personal.description} rows="5" name="description" onChange={handleChange} placeholder="Description" />
        </form>
        )
    }
}


export default PersonalInfo
