import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selecAuthIsAuthenticated, selectAuthState, selectIsAdmin } from '../../redux/reducers/auth/auth.selector'
import { logout } from '../../redux/reducers/auth/auth.actions'

const UserLinks = ({ auth, isAdmin, logout }) => {

    const { isAuthenticated, loading} = auth

    const authLinks = (
        <ul>
            { isAdmin &&
                <li>
                    <NavLink exact to="/dashboard" activeClassName="selected">
                        <i className="fas fa-user"></i>{' '} 
                        <span className="hide-sm">Dashboard</span>
                    </NavLink>
                </li>
            }
            <li><NavLink exact to="/profile"><i className="fas fa-user"></i>{' '}  Profile</NavLink></li>
            <li>
                <a onClick={logout} href="#!">
                <i className="fas fa-sign-out-alt"></i>{' '}
                <span className="hide-sm">Log Out</span></a>
            </li>
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