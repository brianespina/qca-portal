import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selecAuthIsAuthenticated, selectIsAdmin, selectIsLoading} from '../../redux/reducers/auth/auth.selector'
import { createStructuredSelector } from 'reselect'

const DashboardLinks = ({ isAuthenticated, isAdmin, isLoading }) => {

    if(isLoading){
        return <div> </div>
    }

    if(isAuthenticated && isAdmin){
        return(
            <ul className="dash-nav__main-list">
                <li>
                    <Link to='/students' className="dash-nav__links">
                        Students
                    </Link>
                </li>
                <li>
                    <a href="" className="dash-nav__links">Anouncments</a>
                </li>
                <li>
                    <a href="" className="dash-nav__links">Competitions</a>
                </li>
                <li>
                    <a href="" className="dash-nav__links">Subscriptions</a>
                </li>
                <li>
                    <a href="" className="dash-nav__links">Manage User Roles</a>
                </li>
            </ul>
        )
    }

    return (
        <>
        </>
    )
}

const mapStateToprops = createStructuredSelector({
    isAuthenticated: selecAuthIsAuthenticated,
    isAdmin: selectIsAdmin,
    isLoading: selectIsLoading
})

export default connect(mapStateToprops)(DashboardLinks)