import React, { Component } from 'react'

class PersonalInfo extends Component {
   
    render() {

        const { handleChange } = this.props

        return (
            <form className='personal-form'>
                <input type="text" name="first" onChange={handleChange} placeholder="First name" />
                <input type="text" name="last" onChange={handleChange} placeholder="Last name" />
                <input type="text" name="address" onChange={handleChange} placeholder="Address" />
                <input type="text" name="phone" onChange={handleChange} placeholder="Phone" />
                <input type="text" name="email" onChange={handleChange} placeholder="Email" />
                <input type="text" name="github" onChange={handleChange} placeholder="Github" />
                <textarea type="text" rows="5" name="description" onChange={handleChange} placeholder="Description" />
            </form>
        )
    }
}


export default PersonalInfo
