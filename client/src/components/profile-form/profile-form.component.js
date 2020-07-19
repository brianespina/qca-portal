import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { createUpdateProfile } from '../../redux/reducers/profile/profile.actions'
import { connect } from 'react-redux'

const ProfileForm = ({ createUpdateProfile }) =>{
    
    const [ formData, setFormData ] = useState({
        phone: '',
        emergency: '',
        address: '',
        belt: '',
        bio: ''
    })

    const {
        phone,
        emergency,
        address,
        belt,
        bio
    } = formData

    const handleChange = event =>{
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        createUpdateProfile(formData)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <FormInput label="phone" value={phone} onChange={handleChange}/>
            <FormInput label="emergency" value={emergency} onChange={handleChange}/>
            <FormInput label="address" value={address} onChange={handleChange}/>
            <FormInput label="belt" value={belt} onChange={handleChange}/>
            <FormInput label="bio" value={bio} onChange={handleChange}/>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default connect(null, { createUpdateProfile })(ProfileForm)