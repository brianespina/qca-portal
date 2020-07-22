import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ProfileForm from '../../profile-form/profile-form.component'
import MainLayout from '../../layout/main-layout.component'
import { getCurrentUsersProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectProfile } from '../../../redux/reducers/profile/profile.selectors'

const ProfileEdit = ({ match, getCurrentUsersProfile, profile }) => {

    useEffect(()=>{
        getCurrentUsersProfile(match.params.id)
    }, [match.params.id])

    return(
        <MainLayout>
            <ProfileForm profile={profile}/>
        </MainLayout>
    )

}

const mapStateToProps = createStructuredSelector({
    profile: selectProfile
})

export default connect(mapStateToProps, {getCurrentUsersProfile})(ProfileEdit)