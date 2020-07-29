import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ProfileForm from '../../profile-form/profile-form.component'
import MainLayout from '../../layout/main-layout.component'
import { getCurrentUsersProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectOneStudent } from '../../../redux/reducers/profile/profile.selectors'

const ProfileEdit = ({ profile }) => {

    return(
        <MainLayout>
            <ProfileForm profile={profile}/>
        </MainLayout>
    )

}

const mapStateToProps = (state, ownProps) => {
    return{
        profile: selectOneStudent(ownProps.match.params.id)(state)
    }
}

export default connect(mapStateToProps, {getCurrentUsersProfile})(ProfileEdit)