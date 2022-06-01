import React, { Component } from 'react'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
        first: '', 
        last: '', 
        address: '',
        phone: '',
        email: '',
        description: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
        const value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    
    render() {
        const { first, last, address, phone, email, description } = this.state

        return (
        <form className='personal-form'>
            <input type="text" value={first} name="first" onChange={this.handleChange} placeholder="First name" />
            <input type="text" value={last} name="last" onChange={this.handleChange} placeholder="Last name" />
            <input type="text" value={address} name="address" onChange={this.handleChange} placeholder="Address" />
            <input type="text" value={phone} name="phone" onChange={this.handleChange} placeholder="Phone" />
            <input type="text" value={email} name="email" onChange={this.handleChange} placeholder="Email" />
            <textarea type="text" value={description} rows="5" name="description" onChange={this.handleChange} placeholder="Description" />
        </form>
        )
    }
}


export default PersonalInfo
