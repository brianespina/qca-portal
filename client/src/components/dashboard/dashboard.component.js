import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'
import { getCurrentUsersProfile } from '../../redux/reducers/profile/profile.actions'
import { selectAuthState, selectIsAdmin, selecAuthIsAuthenticated} from '../../redux/reducers/auth/auth.selector'
import { selectProfile } from '../../redux/reducers/profile/profile.selectors'
import MainLayout from '../layout/main-layout.component'

const Dashboard  = ({ auth, getCurrentUsersProfile, isAdmin, isAuthenticated}) => {

    useEffect(()=>{
        getCurrentUsersProfile()
    }, [])

    if(auth.loading){
        return <div>page loading...</div>
    }

    if(!isAdmin){
        return <Redirect to="/profile"/>
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