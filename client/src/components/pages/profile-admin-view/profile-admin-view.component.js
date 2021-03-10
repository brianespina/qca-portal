import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Redux
import { selectOneStudent } from '../../../redux/reducers/profile/profile.selectors'
import { getAllProfiles, createUpdateProfile } from '../../../redux/reducers/profile/profile.actions'

// Components
import PageTitle from '../../page-title/page-title.component'
import MainLayout from '../../layout/main-layout.component'
import { BookmarkIcon, InfoIcon, NoteIcon } from '../../icons/icons.component'
import Button from '../../button/button.component'
import TrainingHistory from '../../training-history/training-history.component'
import ProfileEditInput from '../../profile-edit-input/profile-edit-input.component'
import FloatingButton from '../../floating-button/floating-button.component'

const ProfileAdminView = ({ profile, getAllProfiles, createUpdateProfile}) =>{

    const [editMode, setEditMode] = useState(false)

    const [ formData, setFormData ] = useState({
        phone: '',
        emergency: '',
        address: '',
        belt: '',
        bio: '',
        coachNotes: ''
    })

    useEffect(()=>{
        if(!profile){
            getAllProfiles()
        }
    }, [])
    
    useEffect(()=>{
        if(profile){
            setFormData({
                phone: profile.phone || '',
                emergency: profile.emergency || '',
                address: profile.address || '',
                belt: profile.belt || '',
                bio: profile.bio || '',
                coachNotes: profile.coachNotes || ''
            })
        }
    }, [profile])

    let profileId = profile && profile.user._id || false

    const {
        phone,
        emergency,
        address,
        belt,
        bio,
        coachNotes
    } = formData

    const handleChange = event =>{
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const toggleEdit = () => {
        setEditMode(!editMode)
    }

    const handleSubmit = () => {
        createUpdateProfile(formData, profile.user._id)
        setEditMode(false)
    }

    return(
        <MainLayout>
            
            <PageTitle backbutton>
                Profile Page
            </PageTitle>

            {profile && <>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 auto-rows-max">
                    <div>
                        <div className="flex bg-white p-5 rounded-lg shadow overflow-hidden mt-3">
                            {profile.user.avatar && <img className="rounded-full profile-photo-admin" src={profile.user.avatar} /> }
                            {profile.user.name && <div className="profile-name flex-1"><span>{profile.user.name}</span></div> }
                            <div className="flex flex-col justify-center">
                                {!editMode && <Button title="Edit" onClick={toggleEdit} />}
                                
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow overflow-hidden mt-3">
                            <span className="sub-title"><BookmarkIcon className="icon-left-sm"/> Contact Info</span>

                            <div className="sm:flex">
                                <div className="flex-1">
                                    {profile.phone && 
                                    <div className="contact-info-item">
                                        <span>Phone Number</span>
                                        <ProfileEditInput type="text" value={phone} name="phone" onChange={handleChange} active={editMode}/>
                                    </div>}
                                
                                    {profile.emergency && 
                                    <div className="contact-info-item">
                                        <span>Emergency Number</span>
                                        <ProfileEditInput type="text" value={emergency} name="emergency" onChange={handleChange} active={editMode}/>
                                    </div>}
                                </div>

                                <div className="flex-1">
                                    {profile.address && 
                                    <div className="contact-info-item">
                                        <span>Address</span>
                                        <ProfileEditInput type="text" value={address} name="address" onChange={handleChange} active={editMode}/>
                                    </div>}

                                    {profile.belt && 
                                    <div className="contact-info-item">
                                        <span>Belt</span>
                                        <ProfileEditInput type="text" value={belt} name="belt" onChange={handleChange} active={editMode}/>
                                    </div>}
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="bg-white p-5 rounded-lg shadow overflow-hidden md:mt-3">
                            <span className="sub-title"><InfoIcon className="icon-left-sm"/> Short Bio</span>
                            <ProfileEditInput type="text" value={bio} name="bio" onChange={handleChange} active={editMode}/>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow overflow-hidden mt-3 flex-1">
                            <span className="sub-title"><NoteIcon className="icon-left-sm"/> Coach Notes</span>
                            <div>
                                <ProfileEditInput type="textarea" value={coachNotes} name="coachNotes" onChange={handleChange} active={editMode}/> 
                            </div>
                        </div>
                    </div>
                </div>

                <TrainingHistory uid={profile.user._id} className="bg-white p-5 rounded-lg shadow overflow-hidden mt-3 md:mt-8"/>
                
                {editMode && 
                <div className="profile-update-buttons">
                    <FloatingButton onClick={()=> setEditMode(false)}>Cancel</FloatingButton>
                    <FloatingButton type="success" onClick={handleSubmit}>Save Changes</FloatingButton>
                </div>}
                
            </>}


        </MainLayout>
    )
}

const mapStateToProps = (state, ownProps) => {
    return{
        profile: selectOneStudent(ownProps.match.params.id)(state)
    }
}

const mapDispatchToProps = {
    createUpdateProfile,
    getAllProfiles
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileAdminView)