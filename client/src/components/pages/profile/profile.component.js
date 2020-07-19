import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCurrentUsersProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectProfile, selectProfileIsLoading } from '../../../redux/reducers/profile/profile.selectors'

import Modal from '../../modal/modal.component'
import ProfileForm from '../../profile-form/profile-form.component'

const Profile = ({ profile , getCurrentUsersProfile, profileIsLoading}) =>{

    useEffect(()=>{
        getCurrentUsersProfile()
        console.log(profileIsLoading)
    }, [])

    return(
        <>
            <div>
                Profile Page
            </div>
            { !profileIsLoading && !profile && (
                <Modal initial={true}>
                    <ProfileForm/>
                </Modal>)
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    profile: selectProfile,
    profileIsLoading: selectProfileIsLoading
})

export default connect(mapStateToProps, { getCurrentUsersProfile })(Profile)