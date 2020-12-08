import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCurrentUsersProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectProfile, selectSingleProfileIsLoading } from '../../../redux/reducers/profile/profile.selectors'

import Modal from '../../modal/modal.component'
import ProfileForm from '../../profile-form/profile-form.component'
import MainLayout from '../../layout/main-layout.component'
import Loader from '../../loader/loader.component'
import Profile from '../../profile/profile.component'

const ProfilePage = ({ profile , getCurrentUsersProfile, match, singleProfileIsLoading}) =>{

    useEffect(()=>{
        if(!profile){
            getCurrentUsersProfile(match.params.id)
        }
    }, [match.params.id])
    

    return(
        <MainLayout>

            {singleProfileIsLoading 
            ? <Loader />
            : <Profile data={profile}/>}

            {singleProfileIsLoading && !profile && 
                <Modal>
                    <ProfileForm />
                </Modal>
            }

        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    profile: selectProfile,
    singleProfileIsLoading: selectSingleProfileIsLoading
})

export default connect(mapStateToProps, { getCurrentUsersProfile })(ProfilePage)