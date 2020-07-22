import React, { useState, useEffect } from 'react'
import FormInput from '../form-input/form-input.component'
import { createUpdateProfile } from '../../redux/reducers/profile/profile.actions'
import { connect } from 'react-redux'
import { selectProfileIsLoading } from '../../redux/reducers/profile/profile.selectors'
import { createStructuredSelector } from 'reselect'

const ProfileForm = ({ createUpdateProfile, profile, profileIsLoading }) =>{
    
    const [ formData, setFormData ] = useState({
        phone: '',
        emergency: '',
        address: '',
        belt: '',
        bio: ''
    })

    useEffect(()=>{
        if(profile){
            setFormData({
                phone: profile.phone || '',
                emergency: profile.emergency || '',
                address: profile.address || '',
                belt: profile.belt || '',
                bio: profile.bio || ''
            })
        }
    }, [profile])

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
        <>
        {!profileIsLoading &&
            <form className="form" onSubmit={e => handleSubmit(e)}>
                <FormInput type="text" label="phone" value={phone} onChange={handleChange}/>
                <FormInput type="text" label="emergency" value={emergency} onChange={handleChange}/>
                <FormInput type="text" label="address" value={address} onChange={handleChange}/>
                <FormInput type="text" label="belt" value={belt} onChange={handleChange}/>
                <FormInput type="text" label="bio" value={bio} onChange={handleChange}/>
                <button type="submit" >Submit</button>
            </form>
        }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    profileIsLoading: selectProfileIsLoading
})

export default connect(mapStateToProps, { createUpdateProfile })(ProfileForm)