import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/reducers/auth/auth.actions'
import { createStructuredSelector } from 'reselect'
import { selectAuthState, selectIsAdmin } from '../../redux/reducers/auth/auth.selector'

const Navbar = ({ logout, auth, isAdmin}) => {

    const { isAuthenticated, loading} = auth

    const authLinks = (
        <ul>
            { isAdmin &&
                <li>
                    <Link to="/dashboard">
                        <i className="fas fa-user"></i>{' '} 
                        <span className="hide-sm">Dashboard</span>
                    </Link>
                </li>
            }
            <li>
                <a onClick={logout} href="#!">
                <i className="fas fa-sign-out-alt"></i>{' '}
                <span className="hide-sm">Log Out</span></a>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    )

    return(
        <Fragment>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/">
                        QCA Portal
                    </Link>
                </h1>
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
            </nav>
        </Fragment>
    )

}

const mapStateToProps = createStructuredSelector({
    auth: selectAuthState,
    isAdmin: selectIsAdmin
})

export default connect(mapStateToProps, { logout })(Navbar)