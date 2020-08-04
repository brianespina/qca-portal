import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCurrentUsersProfile } from '../../redux/reducers/profile/profile.actions'
import { selectAuthState, selectIsAdmin} from '../../redux/reducers/auth/auth.selector'
import { selectProfile } from '../../redux/reducers/profile/profile.selectors'
import MainLayout from '../layout/main-layout.component'

const Dashboard  = ({ auth, getCurrentUsersProfile}) => {


    if(auth.loading){
        return <div>page loading...</div>
    }

    return (
        <>
            <MainLayout>
                dashboard
            </MainLayout>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    auth: selectAuthState,
    profile: selectProfile,
    isAdmin: selectIsAdmin
})

export default connect(mapStateToProps, { getCurrentUsersProfile })(Dashboard)