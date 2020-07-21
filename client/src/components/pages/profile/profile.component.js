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
        getCurrentUsersProfile(match.params.id)
    }, [])

    return(
        <MainLayout>
            Profile Page
            { !profileIsLoading && !profile && (
                <Modal initial={true}>
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