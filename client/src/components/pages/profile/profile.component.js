import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCurrentUsersProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectProfile, selectProfileIsLoading } from '../../../redux/reducers/profile/profile.selectors'

import Modal from '../../modal/modal.component'
import ProfileForm from '../../profile-form/profile-form.component'
import MainLayout from '../../layout/main-layout.component'

const Profile = ({ profile , getCurrentUsersProfile, profileIsLoading, match}) =>{

    useEffect(()=>{
        if(!profile){
            getCurrentUsersProfile(match.params.id)
        }
    }, [match.params.id])
    

    return(
        <MainLayout>
            
            Profile Page

            { !profileIsLoading && profile && <>
                {profile.user.name && <div>{profile.user.name}</div> }
                {profile.phone && <div>{profile.phone}</div> }
                {profile.emergency && <div>{profile.emergency}</div> }
                {profile.address && <div>{profile.address}</div> }
                {profile.belt && <div>{profile.belt}</div> }
                {profile.bio && <div>{profile.bio}</div> }
            </>}

            { !profileIsLoading && !profile && (
                <Modal isOpen={true} title="You have not setup your Profile yet">
                    <ProfileForm/>
                </Modal>)
            }
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    profile: selectProfile,
    profileIsLoading: selectProfileIsLoading
})

export default connect(mapStateToProps, { getCurrentUsersProfile })(Profile)