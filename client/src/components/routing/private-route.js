import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectAuthState, selectIsAdmin } from '../../redux/reducers/auth/auth.selector'

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading },  isAdmin, admin = false, ...otherProps}) => {

    if(admin && !loading && !isAdmin){
        return <Redirect to="/profile" />
    }

    return (
        <Route 
            { ...otherProps } 
            render={props => 
                !isAuthenticated && !loading 
                ? <Redirect to="/login" /> 
                : <Component { ...props }/>}
        />

    )
}


const mapStateToProps = createStructuredSelector({
    auth: selectAuthState,
    isAdmin: selectIsAdmin
})

export default connect(mapStateToProps)(PrivateRoute)