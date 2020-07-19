import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCurrentUsersProfile } from '../../redux/reducers/profile/profile.actions'
import { selectAuthState } from '../../redux/reducers/auth/auth.selector'
import { selectProfile } from '../../redux/reducers/profile/profile.selectors'
import Spinner from '../layout/spinner.component'

const Dashboard  = ({ auth: { user }, getCurrentUsersProfile}) => {

    useEffect(()=>{
        getCurrentUsersProfile()
    }, [])

    return (
        <div>dashboard</div>
    )
}

const mapStateToProps = createStructuredSelector({
    auth: selectAuthState,
    profile: selectProfile
})

export default connect(mapStateToProps, { getCurrentUsersProfile })(Dashboard)