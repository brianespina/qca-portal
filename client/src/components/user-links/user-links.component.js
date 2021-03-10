import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthState, selectIsAdmin } from '../../redux/reducers/auth/auth.selector'
import { logout } from '../../redux/reducers/auth/auth.actions'
import { getCurrentUsersProfile } from '../../redux/reducers/profile/profile.actions'
import { selectUserId } from '../../redux/reducers/auth/auth.selector'
import { selectProfile } from '../../redux/reducers/profile/profile.selectors'

// Icons
import {UserIcon, LogoutIcon} from '../icons/icons.component'

const UserLinks = ({ auth, isAdmin, userId, logout, getCurrentUsersProfile, profile }) => {

    useEffect(() => {
        getCurrentUsersProfile(userId)
    }, [userId])

    const { isAuthenticated, loading} = auth

    const authLinks = (
        <ul>
            {/* { isAdmin &&
                <li>n
                    <NavLink exact to="/dashboard" activeClassName="selected">
                        <i className="fas fa-user"></i>{' '} 
                        <span className="hide-sm">Dashboard</span>
                    </NavLink>
                </li>
            } */}
            {profile && 
                <NavLink exact to={`/profile/${profile._id}`} className="main-nav-button">
                    <UserIcon className="icon-left-sm"/>{' '}  Profile
                </NavLink>
            }

            <a onClick={logout} href="#!" className="main-nav-button">
                <LogoutIcon className="icon-left-sm"/>{' '}
                <span className="hide-sm">Log Out</span></a>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li><NavLink exact to="/register">Register</NavLink></li>
            <li><NavLink exact to="/login">Login</NavLink></li>
        </ul>
    )

    return(
        <>
            { !loading && 
                (
                    <Fragment>
                        {
                            isAuthenticated 
                            ? authLinks 
                            : guestLinks
                        }
                    </Fragment>
                )
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    auth: selectAuthState, 
    isAdmin: selectIsAdmin,
    userId: selectUserId,
    profile: selectProfile
})

const mapDispatchToProps = {
    getCurrentUsersProfile,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps )(UserLinks)