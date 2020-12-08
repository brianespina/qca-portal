import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthState, selectIsAdmin } from '../../redux/reducers/auth/auth.selector'
import { logout } from '../../redux/reducers/auth/auth.actions'

// Icons
import {UserIcon, LogoutIcon} from '../icons/icons.component'

const UserLinks = ({ auth, isAdmin, logout }) => {

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
            <NavLink exact to="/profile" className="main-nav-button">
                <UserIcon className="icon-left-sm"/>{' '}  Profile
            </NavLink>
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
    isAdmin: selectIsAdmin
})

export default connect(mapStateToProps, { logout })(UserLinks)